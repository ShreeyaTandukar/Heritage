import React, { useRef, useState, useEffect } from "react";
import templeImageFallback from "/images/image.png";
import templeAudioFallback from "/audio/baghbhairav.mp3";

import {
  Play,
  Pause
} from "lucide-react";

const AudioPlayer = ({site}) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime,setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const image = site?.heroImage || templeImageFallback;
  const audioSrc = site?.audioGuide || templeAudioFallback;

  //if the site changes, stop playback and ler the <audio> element reload the new source
  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    if(audioRef.current){
      audioRef.current.load();
    }
  }, [audioSrc]);
  

  const handlePlay = () => {
    if(!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  }
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  }
  const handleEnded = ()=> {
    setPlaying(false);
    setCurrentTime(0);
    if(audioRef.current){
      audioRef.current.currentTime = 0;
    }
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0": ""}${seconds}`;
  };

  return (
    <section className="bg-[#F8F4EE] px-6 md:px-16 lg:px-24 pb-12 md:pb-20" data-aos="fade-up">

      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">

      {/* Hero Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg md:h-full">

        <img
          src={image}
          alt={site?.name || "Heritage site"}
          className="w-full h-64 md:h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-6 left-6 z-10">

          <p className="uppercase tracking-[4px] text-[#D6A94F] text-sm font-semibold">
            Audio Heritage Guide
          </p>

          <h2 className="text-white text-4xl font-bold mt-2 leading-tight">
            {site?.name}
          </h2>

          <p className="text-white/90 mt-2">
            {site?.locationLabel}
          </p>

        </div>

      </div>

      {/* Audio Card */}

      <div className="bg-white rounded-3xl shadow-xl p-5 mt-6 md:mt-0">

        <div className="flex gap-4">

          <img
            src={image}
            alt=""
            className="w-20 h-20 rounded-2xl object-cover"
          />

          <div className="flex-1">

            <p className="text-xs uppercase tracking-widest text-[#D6A94F]">
              Audio Introduction
            </p>

            <h3 className="font-bold text-[#4B2E2A] mt-1">
              {site?.audioTitle || "Heritage Story"}
            </h3>

            {/* Progress Bar */}

            <div className="mt-5">

             <input
             type="range"
             min="0"
             max={duration}
             value={currentTime} 
             onChange={(e) => {
              const time = Number(e.target.value);
              audioRef.current.currentTime =time;
              setCurrentTime(time);
             }}
             className="w-full accent-[#7B1E23] cursor-pointer"
             />

              <div className="flex justify-between mt-2 text-xs text-gray-500">

                <span>{formatTime(currentTime)}</span>

                <span>{formatTime(duration)}</span>

              </div>

            </div>

          </div>

        </div>

        {/* Controls */}

        <div className="flex justify-center  mt-7">

          <button
            onClick={handlePlay}
            className="w-14 h-14 rounded-full bg-[#7B1E23] flex items-center justify-center hover:scale-110 transition"
          >

            {playing ? (
              <Pause fill="white" className="text-white" />
            ) : (
              <Play fill="white" className="text-white ml-1" />
            )}

          </button>

        </div>

      </div>

      </div>

      {/* Hidden Audio */}

      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      >
        <source src={audioSrc} type="audio/mp3" />
      </audio>
      

    </section>
  );
};

export default AudioPlayer;