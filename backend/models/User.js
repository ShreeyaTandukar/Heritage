const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type:String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
            default: "",
        },
        badges:

            {
                type:[String],
                default: [],
            },
        
        passportId: {
            type: String,
            default: "",
        },
        currentJourney: {
            type: String,
            default:"New Explorer",
        },
        completedSites: {
            type: Number,
            default: 0,
        },
        journeys: 
            {
                type:[String],
                default: [],
            },
        
        souvenirs:
            {
                type:[String],
                default: [],
            },
        
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", userSchema);

module.exports = User;