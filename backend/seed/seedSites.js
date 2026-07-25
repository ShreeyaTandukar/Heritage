//run cd backend then node seed/seedSites.js

const dotenv= require("dotenv");
const connectDB = require("../config/db");
const HeritageSite = require("../models/HeritageSite");

dotenv.config();

const sites = [
    {
        slug: "bagh-bhairav",
        codePrefix: "BB",
        name: "Bagh Bhairav Temple",
        shortDescription: "The Tiger Sentinel of Kirtipur",
        tagline: "The Tiger Sentinel",
        locationLabel: "Kirtipur,Nepal",
        heroImage:"/images/baghbhairavtemple.png",
        history:
            "Standing as a silent guardian of Kirtipur for centuries, this ancient fortress temple preserve the spirit of Newar warriors and the divine protection of Bhairav",
        hiddenStory:
            "Some stories are not written in books. They live in the voices of those who protect Nepal's heritage. Unlock exclusive legends, forgotten rituals, hidden temple secrests, sacred belifs, and fascinating stories surrounding Bagh Bhairav Temple that very few visitors ever get to hear.",
        audioTitle: "The Legend of the Tongue-Less Deity",
        audioGuide: "/audio/baghbhairav.mp3",
        video: "/videos/baghbhairav.mp4",
        gallery: [
            "/images/baghbhairavtemple.png",
            "/images/gallery.jpg",
            "/images/gallery1.jpg",
            "/images/image.png",
            
        ],
        chapters:[
            {
                title: "Chapter 1",
                heading: "The Birth of the Guardian",
                content:
                    "Long before kirtipur became the historic town we know today, the people the people believed a powerful guardian protected the valley. Bagh Bhairav was worshipped as the fearless protector of the community, symbolizing courage, justice, and strength.",
            },
            {
                title: "Chapter 2",
                heading: "The Great Battle",
                content:
                "Throughout history, the people of Kirtipur prayed to Bagh Bhairav during difficult times. The deity became a symbol of resilience, inspiring generations to defend their culture and traditions.",
            },
            {
                title: "Chapter 3",
                heading: "Living Heritage",
                content:
                "Today, Bagh Bhairav Temple remains one of Nepal's most important heritage sites. Festivals, rituals, and traditional Newar culture continue to keep its legacy alive for future generations.",
            },
            {
               title:"Chapter 4",
               heading: "Timeline of Preservation",
               timeline:[
                {
                    year: "1515 A.D.", 
                    title: "Resdidence of Byaghrevara"
                },
                {
                    year: "1587 A.D.",
                    title: "Golden Kalasha Added"
                },
                {
                    year: "1703 A.D.",
                    title: "Gold-plated Copper Entrance"
                },
                {
                    year:"1717 A.D.",
                    title:"Hanuman Stone Figures Installed"
                },
                {
                    year: "1803 A.D.",
                    title: "70.5 kg temple Bell Insttalled"
                },
                {
                    year: "1936 A.D.",
                    title: "Major Temple Decoration"
                },
                {
                    year: "1867 A.D.",
                    title: "Godavari Marble Installed"
                },
               ],
            },
        ],
        artisan:{
            name: "RajBhai Tandukar",
            role: "Master Wood Carver",
            location: "Balambu, Chandagiri",
            image: "/images/artisan.jpg",
            bio:
            "With over 25 years of experience, RajBhai Tandukar continues the tional Newar art of wood carving. Every HeritageLink souvenir is handcrafted with dedication and respect for Nepal's cultural heritage.",
        },
        badge:{
            title:"Bagh bhairav Explorer",
            image: "/images/badge.jpg",
            description:
            "Awarded for completing the Bagh Bhairav Temple heritage journey.",
        },
        latitude: 27.6788,
        longitude: 85.2777,
        isActive: true,
    },
];

const run = async () => {
  await connectDB();

  for (const siteData of sites) {
    const result = await HeritageSite.findOneAndUpdate(
      { slug: siteData.slug },
      siteData,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log(`Seeded: ${result.name} (${result.slug})`);
  }

  console.log("Done.");
  process.exit(0);
};

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});