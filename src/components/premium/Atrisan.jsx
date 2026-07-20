import React, {useState} from 'react';
import {UserRound, PlayCircle, MapPin, Hammer} from "lucide-react";
import heroImage from "../../assets/images/artisan.jpg";
import heroVideo from "../../assets/videos/baghbhairav.mp4";

const Artisan = () => {
    const[showVideo, setShowVideo] =useState(false);
  return (
<section className='bg-[#EFE8DE] px-6 py-16'>
    {/* Heading */}
    <div className="text-center">
    <span className="inline-flex items-center gap-2 bg-[#FFF5D8] text-[#7B1E23] px-4 py-2 rounded-full text-sm font-semibold">
      <UserRound size={16}/>
      Premium Artisan
    </span>
    <h2 className='mt-5 text-4xl font-bold text-[#4B2E2A]'>
      Meet the Artisan
    </h2>
    <p className='mt-4 text-[#6B5A48] leading-8'>
        Every HeritageLink souvenir carries generations of
          craftsmanship. Meet the artisan behind your piece.
    </p>
    </div>
    {/*Before Click */}
    {!showVideo && (
      <div className='mt-10'>
        <div className='rounded-3xl overflow-hidden shadow-xl'>
          <img
            src={heroImage}
            alt="Artisan"
            className='w-full h-64 object-cover'
          />
        </div>
        <button
          onClick={ () => setShowVideo(true)}
          className='mt-8 w-full bg-[#7B1E23] hover:bg-[#64191D] text-white py-4 rounded-2xl flex justify-center items-center gap-3 transition'
        >
          <PlayCircle size={24}/>
          Meet the Artisan
        </button>
      </div>
    )}
    {/* After Click */}
    {showVideo && (
      <div className='mt-12 grid md:grid-cols-2 gap-10 items-center'>
        {/* Left */}
        <div>
          <h3 className='text-3xl font-bold text-[#4B2E2A]'>RajBhai Tandukar</h3>
          <div className='mt-6 space-y-4'>
            <div className='flex items-center gap-3'>
              <Hammer size={18} className='text-[#D6A94F]'/>
              <span>Master Wood Carver</span>
            </div>
            <div className='flex items-center gap-3'>
              <MapPin size={18} className='text-[#D6A94F]'/>
              <span>Balambu, Chandagiri</span>
            </div>
          </div>
          <p className='mt-6 text-[#6B5A48] leading-8'>
             With over 25 years of experience, RajBhai 
             Tandukar continues the traditional Newar art
              of wood carving. Every HeritageLink souvenir
              is handcrafted with dedication and respect
              for Nepal's cultural heritage.
          </p>
        </div>
        {/* Right */}
        <div className='rounded-3xl overflow-hidden shadow-xl'>
          <video
          controls
          poster={heroImage}
          className="w-full rounded-3xl"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        </div>
      </div>
    )}
</section>
  )
}

export default Artisan;