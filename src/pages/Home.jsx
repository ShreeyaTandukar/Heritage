import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AudioGuide from "../components/AudioGuide";
import AudioPlayer from '../components/AudioPlayer';
import Artisan from '../components/Artisan';
import HeritageGallery from '../components/HeritageGallery';
import HiddenStory from '../components/HiddenStory';
import Badge from '../components/Badge';
import WhyChooseUs from '../components/WhyChoose';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <AudioGuide/>
    <AudioPlayer/>
    <Artisan/>
    <HeritageGallery />
    <HiddenStory />
    <Badge />
    <WhyChooseUs />
    <Footer />
   
    </>
  );
}

export default Home