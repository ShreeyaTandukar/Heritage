const ActivationCode = require("../models/ActivationCode");
const User = require("../models/User");

//create activation code
const createActivationCode = async (req,res) => {
    try{
        const activationCode = await ActivationCode.create(req.body);

        res.status(201).json({
            success: true,
            data:activationCode,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//verify Activation code
const verifyActivationCode = async (req, res) => {
  try {
    const { code } = req.body;

    const activationCode = await ActivationCode.findOne({ code });

    if (!activationCode) {
      return res.status(404).json({
        success: false,
        message: "Invalid Activation Code",
      });
    }

    if (activationCode.used) {
      return res.status(400).json({
        success: false,
        message: "This Activation Code has already been used.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Activation code verified.",
      site: activationCode.site,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const claimActivationCode = async (req, res) => {
  try {
    const { code } = req.body;

    const activationCode = await ActivationCode.findOne({ code });

    if (!activationCode) {
      return res.status(404).json({
        success: false,
        message: "Invalid Activation Code",
      });
    }

    if (activationCode.used) {
      return res.status(400).json({
        success: false,
        message: "This Activation Code has already been used.",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    activationCode.used = true;
    await activationCode.save();

    user.badges.push(`${activationCode.site} Explorer`);
    user.journeys.push(activationCode.site);
    user.souvenirs.push(`${activationCode.site} Souvenir`);
    user.completedSites += 1;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Badge collected successfully!",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {createActivationCode,verifyActivationCode, claimActivationCode,};