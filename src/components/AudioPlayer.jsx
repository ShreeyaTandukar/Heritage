import React, { useRef, useState } from "react";
import templeImage from "../assets/images/image.png";
import templeAudio from "../assets/audio/baghbhairav.mp3";

import {
  Play,
  Pause
} from "lucide-react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime,setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    <section className="bg-[#F8F4EE] px-6 pb-12" data-aos="fade-up">

      {/* Hero Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg">

        <img
          src={templeImage}
          alt="Bagh Bhairav Temple"
          className="w-full h-64 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-6 left-6 z-10">

          <p className="uppercase tracking-[4px] text-[#D6A94F] text-sm font-semibold">
            Audio Heritage Guide
          </p>

          <h2 className="text-white text-4xl font-bold mt-2 leading-tight">
            Bagh Bhairav Temple
          </h2>

          <p className="text-white/90 mt-2">
            Kirtipur, Kathmandu
          </p>

        </div>

      </div>

      {/* Audio Card */}

      <div className="bg-white rounded-3xl shadow-xl p-5 mt-6">

        <div className="flex gap-4">

          <img
            src={templeImage}
            alt=""
            className="w-20 h-20 rounded-2xl object-cover"
          />

          <div className="flex-1">

            <p className="text-xs uppercase tracking-widest text-[#D6A94F]">
              Audio Introduction
            </p>

            <h3 className="font-bold text-[#4B2E2A] mt-1">
              The Legend of the Tongue-less Deity
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

      {/* Hidden Audio */}

      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      >
        <source src={templeAudio} type="audio/mp3" />
      </audio>
      

    </section>
  );
};

export default AudioPlayer;