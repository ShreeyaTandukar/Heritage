const mongoose = require("mongoose");

const heritageSiteSchema = new mongoose.Schema(
  {
    //Basic informations
    slug: {
      type:String,
      required: true,
      unique: true,
      trim: true,
    },
    codePrefix: {
      type: String,
      required: true,
      unique:true,
      uppercase: true,
    },
    name: {
      type: String,
      required:true,
      trim:true,
    },
    shortDescription: {
      type:String,
      required: true,
    },
    tagline: {
      type: String,
      default: "",
    },
    locationLabel: {
      type:String,
      default: "",
    },
    //hero Section
    heroImage: {
      type: String,
      default: "",
    },
    //History
    history: {
      type: String,
      default: "",
    },
    //multi-chapter story used by the premium "History" walkthrough,
    //each chapter optionally including a timeline of dated events,
    chapters: [
      {
        title: {
          type:String,
          default: ""
        },
        heading: {
          type:String,
          default: "",
        },
        content:{
          type:String,
          default: "",
        },
        timeline:[
          {
            year:{
              type:String,
              default: ""
            },
            title:{
              type:String,
              default:""
            },
          },
        ],
      },
    ],
    //hidden story
    hiddenStory: {
      type: String,
      default: "",
    },
    //Audio Guide
    audioTitle: {
      type: String,
      default: "",
    },
    audioGuide: {
      type: String,
      default: "",
    },
    //video
    video:{
      type: String,
      default: "",
    },
    //Gallery Images
    gallery: [
      {
        type: String,
      },
    ],
    //Artisan Information
    artisan: {
      name:{
        type: String,
        default: "",
      },
      role:{
        type: String,
        default: "",
      },
      location: {
        type:String,
        default:"",
      },
      image: {
        type: String,
        default: "",
      },
      bio: {
        type: String,
        default: "",
      },
    },
    //badge Information
    badge:{
      title: {
        type:String,
        default: "",
      },
      image: {
        type: String,
        default:"",
      },
      description: {
        type: String,
        default: "",
      },
    },
    //optional location data
    latitude: Number,
    longitude: Number,

    //active or hidden
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = heritageSiteSchema;