import React, {useState} from 'react';
import {UserRound, PlayCircle, MapPin, Hammer} from "lucide-react";
import artisanImageFallback from "/images/artisan.jpg";
import heroVideoFallback from "/videos/baghbhairav.mp4";

const Artisan = ({ site }) => {
    const[showVideo, setShowVideo] =useState(false);

    const artisan = site?.artisan || {};
    const image = artisan.image || artisanImageFallback;
    // No dedicated per-artisan video field yet — reuses the site's video
    // as a placeholder until a specific artisan video URL is added.
    const video = site?.video || heroVideoFallback;

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
            src={image}
            alt={artisan.name || "Artisan"}
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
          <h3 className='text-3xl font-bold text-[#4B2E2A]'>{artisan.name}</h3>
          <div className='mt-6 space-y-4'>
            {artisan.role && (
              <div className='flex items-center gap-3'>
                <Hammer size={18} className='text-[#D6A94F]'/>
                <span>{artisan.role}</span>
              </div>
            )}
            {artisan.location && (
              <div className='flex items-center gap-3'>
                <MapPin size={18} className='text-[#D6A94F]'/>
                <span>{artisan.location}</span>
              </div>
            )}
          </div>
          <p className='mt-6 text-[#6B5A48] leading-8'>
             {artisan.bio}
          </p>
        </div>
        {/* Right */}
        <div className='rounded-3xl overflow-hidden shadow-xl'>
          <video
          controls
          poster={image}
          className="w-full rounded-3xl"
        >
          <source src={video} type="video/mp4" />
        </video>
        </div>
      </div>
    )}
</section>
  )
}

export default Artisan;