import React from "react";
import { Heart, MapPinned } from "lucide-react";

const PremiumFooter = () => {
  return (
    <footer className="bg-[#4B2E2A] text-white px-6 py-14">

      <div className="text-center">

        <div className="w-20 h-20 rounded-full bg-[#D6A94F] mx-auto flex items-center justify-center">

          <MapPinned size={36} />

        </div>

        <h2 className="text-3xl font-bold mt-6">
          Journey Completed
        </h2>

        <p className="mt-5 text-gray-300 leading-8">

          Thank you for exploring the story,
          history and craftsmanship behind
          Bagh Bhairav Temple.

          <br /><br />

          Your HeritageLink journey has only
          just begun.

        </p>

        <div className="mt-10 bg-[#5C3A36] rounded-2xl p-5">

          <p className="font-semibold text-[#D6A94F]">
            Next Destination
          </p>

          <h3 className="text-2xl font-bold mt-2">
            Nyatapola Temple
          </h3>

          <p className="text-gray-300 mt-2">
            Unlock another HeritageLink
            souvenir to continue your
            collection.
          </p>

        </div>

        <div className="mt-10 flex justify-center items-center gap-2 text-gray-300">

          <Heart
            size={18}
            className="text-red-400"
          />

          <span>
            Crafted with love for Nepal's Heritage
          </span>

        </div>

        <p className="mt-8 text-sm text-gray-400">

          © 2026 HeritageLink

        </p>

      </div>

    </footer>
  );
};

export default PremiumFooter;