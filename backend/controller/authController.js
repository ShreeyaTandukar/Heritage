const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register User

const registerUser = async (req,res) =>{
    try{
        const {name, email, password} = req.body;

        //check if email already exists
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "Email already registered",
            });
        }

        //Hash password
        const hashedPassword =await bcrypt.hash(password,10);

        //crreate user
        const passportId = `HL-${Date.now()}`;
        const user = await User.create ({
            name,
            email,
            password: hashedPassword,
            passportId,
        });

        res.status(201).json({
            success: true,
            message: "Passpoert Issued sucessfully!",
            user: {
                id: user._id,
                name:user.name,
                email:user.email,
            },
        });
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        //find user
        const user = await User.findOne({email});

        if(!user) {
            return res.status(404).json({
                success: false,
                message:"User not found",
            });
        }
        //compare password
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message:"Incorrect password",
            });
        }

        //Generate JWT
        const token =jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );
        res.status(200).json({
            success: true,
            message: "Login Successful!",
            token,
            user: {
                id: user._id,
                name: user.name,
                email:user.email,
            },
        });
    } catch (error){
        res.status(500).json({   
                success: false,
                message: error.message,
        });
    }
};

const getProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            user,
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const updateProfile = async (req, res) => {
    try {
        const { name, profileImage } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Only touch fields the client actually sent.
        if (typeof name === "string" && name.trim() !== "") {
            user.name = name.trim();
        }

        if (typeof profileImage === "string") {
            user.profileImage = profileImage;
        }

        await user.save();

        const safeUser = await User.findById(user._id).select("-password");

        res.status(200).json({
            success: true,
            message: "Profile updated successfully!",
            user: safeUser,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    registerUser, loginUser, getProfile, updateProfile,
};