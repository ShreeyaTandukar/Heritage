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
          translations: {
            ne: {
                name: "बाघ भैरव मन्दिर",
                tagline: "बाघ संरक्षक",
                shortDescription: "कीर्तिपुरको बाघ संरक्षक",
                locationLabel: "कीर्तिपुर, नेपाल",
                history: "शताब्दियौंदेखि कीर्तिपुरको मौन संरक्षकको रूपमा उभिएको यो पुरानो किल्लाकार मन्दिरले नेवार योद्धाहरूको भावना र भैरवको दैवी सुरक्षालाई संरक्षण गर्दछ।",
                hiddenStory: "केही कथाहरू किताबहरूमा लेखिएका हुँदैनन्। तिनीहरू नेपालको सम्पदा संरक्षण गर्नेहरूको आवाजमा बाँच्छन्। बाघ भैरव मन्दिरको वरिपरि रहेका विशेष किंवदन्तीहरू, बिर्सिएका अनुष्ठानहरू, लुकेका मन्दिर रहस्यहरू अनलक गर्नुहोस्।",
                audioTitle: "जिब्रो नभएको देवताको किंवदन्ती",
                artisan: {
                    role: "मुख्य काठ शिल्पकार",
                    location: "बालम्बु, चन्द्रागिरी",
                    bio: "२५ वर्षभन्दा बढी अनुभवका साथ, राजभाइ तान्दुकारले पारम्परिक नेवार काठ शिल्पकलालाई निरन्तरता दिइरहेका छन्। प्रत्येक हेरिटेजलिंक स्मृति चिन्ह नेपालको सांस्कृतिक सम्पदाको सम्मानमा हातले बनाइएको हुन्छ।",
                },
                badge: {
                    title: "बाघ भैरव अन्वेषक",
                    description: "बाघ भैरव मन्दिर सम्पदा यात्रा पूरा गरेकोमा प्रदान गरिएको।",
                },
            },
            new: {
                name: "बाघ भैरव देगः",
                tagline: "बाघ रक्षक",
                shortDescription: "कीर्तिपुरयागु बाघ रक्षक",
                locationLabel: "कीर्तिपुर, नेपाल",
                history: "छगू शताब्दी दयेकुनु कीर्तिपुरयागु रक्षकयागु रूपय् दुगु थ्व देगःयेन नेवाः योद्धापिनिगु भावना व भैरवयागु रक्षा तयातःगु दु।",
                hiddenStory: "छुं कथा पुस्तकय् मदु। थ्व कथापिं नेपालयागु सम्पदा रक्षा यायेगु मनूतयगु स्वरय् दु। बाघ भैरव देगःया वरिपरि दुगु किंवदन्ती व तयेकः रहस्य खुलेका।",
                audioTitle: "मे मदुगु देवयागु किंवदन्ती",
                artisan: {
                    role: "मू सिकः शिल्पकार",
                    location: "बालम्बु, चन्द्रागिरी",
                    bio: "२५ दं हे यक्व अनुभव दुगु राजभाइ तान्दुकारं नेवाः सिकः शिल्पकला थ्यंकातःगु दु। हेरिटेजलिंकयागु सुम्ति चिं नेपालयागु सम्पदा हे सम्मानय् तयातःगु दु।",
                },
                badge: {
                    title: "बाघ भैरव अन्वेषक",
                    description: "बाघ भैरव देगःयागु सम्पदा यात्रा थ्यंकातःगु ला।",
                },
            },
        },
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