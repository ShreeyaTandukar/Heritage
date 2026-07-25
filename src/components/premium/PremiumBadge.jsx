import React from "react";
import { Award, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PremiumBadge = ({ site }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F8F4EE] px-6 py-16">

      <div className="text-center">

        {/* Badge Icon */}

        <div className="mx-auto w-28 h-28 rounded-full bg-[#FFF5D8] flex items-center justify-center shadow-lg">

          <Award
            size={60}
            className="text-[#D6A94F]"
          />

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-4xl font-bold text-[#4B2E2A]">
          Congratulations!
        </h2>

        {/* Description */}

        <p className="mt-4 text-[#6B5A48] leading-8 max-w-xl mx-auto">
          You have completed the Heritage Journey of
          <span className="font-semibold"> {site?.name || "this heritage site"}</span>.

          <br /><br />

          Save your Heritage Badge to your Heritage Passport
          and continue discovering Nepal's cultural treasures.
        </p>

        {/* Save Button */}

        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-[#7B1E23] hover:bg-[#65161B] text-white px-8 py-4 rounded-full flex items-center gap-3 mx-auto transition duration-300 hover:scale-105 shadow-lg"
        >

          <Gift size={22} />

          Save Badge to Passport

        </button>

        {/* Small Note */}

        <p className="mt-5 text-sm text-[#8B7355]">
          Your badge will be securely stored inside your
          Heritage Passport after signing in.
        </p>

      </div>

    </section>
  );
};

export default PremiumBadge;