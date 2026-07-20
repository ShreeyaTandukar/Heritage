import React, {useState} from 'react'
import {Images, Expand} from "lucide-react"

import img1 from "../../assets/images/baghbhairavtemple.png";
import img2 from "../../assets/images/gallery.jpg";
import img3 from "../../assets/images/gallery1.jpg";
import img4 from "../../assets/images/image.png";
const images = [img1, img2, img3, img4];

const PremiumGallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#EFE8DE] px-6 py-16">

      {!open ? (

        <div className="text-center">

          <Images
            size={55}
            className="mx-auto text-[#D6A94F]"
          />

          <h2 className="mt-6 text-4xl font-bold text-[#4B2E2A]">
            Premium Gallery
          </h2>

          <p className="mt-4 text-[#6B5A48] leading-8">
            Discover exclusive photographs,
            hidden corners, architecture and
            beautiful moments of Bagh Bhairav Temple.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 bg-[#7B1E23] text-white px-8 py-3 rounded-full hover:bg-[#65161B] transition"
          >
            Explore Gallery
          </button>

        </div>

      ) : (

        <>

          <h2 className="text-3xl font-bold text-[#4B2E2A] text-center mb-10">
            Heritage Gallery
          </h2>

          <div className="grid grid-cols-2 gap-4">

            {images.map((image, index) => (

              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >

                <img
                  src={image}
                  alt=""
                  className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">

                  <Expand className="text-white" />

                </div>

              </div>

            ))}

          </div>

        </>

      )}

    </section>
  );
};

export default PremiumGallery