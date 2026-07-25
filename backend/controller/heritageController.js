const HeritageSite = require("../models/HeritageSite");


//list every active heritage sites
exports.getAllSites = async(req, res) => {
    try{
        const sites = await HeritageSite.find({isActive: true});

        res.status(200).json({
            success :true,
            sites,
        });
    }catch (error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//gett single site by slug
exports.getSiteBySlug = async (req,res) => {
    try{
        const { slug } = req.params;
        const site = await HeritageSite.findOne({
            slug,
            isActive:true
        });
        if(!site){
            return res.status(404).json({
                success: false,
                message:"Site not found"
            });
        }
        res.status(200).json({
            success: true,
            site,
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//create a new heritage site
//bagh bhairav into the database

exports.createSite = async(req,res) => {
    try{
        const site = await HeritageSite.create(req.body);

        res.status(201).json({
            success: true,
            site,
        });
    }catch (error){
        if(error.code === 11000){
            return res.status(400).json({
                success: false,
                message:"Asite with the slug already exists.",
            });
        }
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};