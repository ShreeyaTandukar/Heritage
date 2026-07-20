import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  UserCircle2,
  Award,
  Package,
  MapPinned,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import PremiumFooter from "./PremiumFooter";

import badge from "../../assets/images/badge.jpg";

const HeritagePassport = () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get("/auth/profile");

      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const startEditing = () => {
    setEditedName(user?.name || "");
    setEditing(true);
  };

  const handleSaveName = async () => {
    const trimmedName = editedName.trim();

    if (trimmedName === "") {
      alert("Name cannot be empty.");
      return;
    }

    setSaving(true);

    try {
      const response = await api.put("/auth/profile", {
        name: trimmedName,
      });

      setUser(response.data.user);

      // Keep the cached user in sync so other pages don't show stale data.
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setEditing(false);
    } catch (error) {
      alert(
        error.response?.data?.message || "Could not update your name."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EFE8DE]">
      {/* Header */}

      <div className="bg-[#4B2E2A] rounded-b-3xl px-8 py-6 text-white">
        <button onClick={() => navigate(-1)} className="mb-5">
          <ArrowLeft size={24} />
        </button>

        <div className="flex flex-col items-center">
          {/* Profile */}

          <div className="relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#D6A94F]"
              />
            ) : (
              <UserCircle2 size={95} className="text-[#D6A94F]" />
            )}

            <label className="absolute bottom-0 right-0 bg-[#D6A94F] p-2 rounded-full cursor-pointer">
              📷

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setProfileImage(URL.createObjectURL(file));
                  }
                }}
              />
            </label>
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            Heritage Passport
          </h1>

          {/* Name */}

          {editing ? (
            <div className="mt-4 flex flex-col items-center gap-3">
              <input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                disabled={saving}
                className="bg-white text-black rounded-xl px-4 py-2 text-center outline-none disabled:opacity-60"
              />

              <div className="flex gap-3">
                <button
                  onClick={handleSaveName}
                  disabled={saving}
                  className="bg-[#D6A94F] text-[#4B2E2A] px-5 py-2 rounded-full font-semibold disabled:opacity-70"
                >
                  {saving ? "Saving..." : "Save"}
                </button>

                <button
                  onClick={() => setEditing(false)}
                  disabled={saving}
                  className="bg-white/20 text-white px-5 py-2 rounded-full font-semibold disabled:opacity-70"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-3">
              <p className="text-[#D6A94F] text-xl font-semibold">
                {user?.name}
              </p>

              <button onClick={startEditing}>
                ✏️
              </button>
            </div>
          )}

          <p className="mt-3 text-sm text-gray-300">
            {user?.currentJourney || "New Explorer"}
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Passport ID: {user?.passportId}
          </p>

          {/* Progress */}

          <div className="w-full mt-6">
            <div className="flex items-center justify-between gap-3 text-xs text-[#E8DCC8] mb-2">
              <span className="font-medium">
                Explorer Progress
              </span>

              <span className="font-medium">
                {user?.completedSites || 0} / 10 Sites
              </span>
            </div>

            <div className="w-full bg-[#8B6C67] rounded-full h-3">
              <div
                className="bg-[#D6A94F] h-3 rounded-full transition-all duration-700"
                style={{
                  width: `${((user?.completedSites || 0) / 10) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Explorer Stats */}

      <div className="px-5 py-2 space-y-5">
        <div className="bg-white rounded-3xl shadow-lg p-5">
          <h2 className="text-xl font-bold text-[#4B2E2A]">
            Explorer Stats
          </h2>

          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div>
              <Award
                className="mx-auto text-[#D6A94F]"
                size={30}
              />

              <h3 className="text-2xl font-bold mt-2">
                {user?.badges?.length || 0}
              </h3>

              <p className="text-sm text-gray-500">
                Badge
              </p>
            </div>

            <div>
              <Package
                className="mx-auto text-[#D6A94F]"
                size={30}
              />

              <h3 className="text-2xl font-bold mt-2">
                {user?.souvenirs?.length || 0}
              </h3>

              <p className="text-sm text-gray-500">
                Souvenir
              </p>
            </div>

            <div>
              <MapPinned
                className="mx-auto text-[#D6A94F]"
                size={30}
              />

              <h3 className="text-2xl font-bold mt-2">
                {user?.journeys?.length || 0}
              </h3>

              <p className="text-sm text-gray-500">
                Journey
              </p>
            </div>
          </div>
        </div>

        {/* Heritage Collection */}

       <div className="bg-white rounded-3xl shadow-lg p-5">
  <h2 className="text-xl font-bold text-[#4B2E2A] mb-5">
    Heritage Collection
  </h2>

  {[
    { name: "Bagh Bhairav", label: "Bagh Bhairav Explorer", image: badge },
    { name: "Nyatapola", label: "Nyatapola Temple" },
    { name: "Pashupatinath", label: "Pashupatinath Temple" },
    { name: "Swayambhunath", label: "Swayambhunath" },
  ].map((site, index) => {
    const unlocked = user?.journeys?.includes(site.name);

    return (
      <div
        key={index}
        className={`flex items-center gap-4 rounded-2xl p-4 ${
          index > 0 ? "mt-4" : ""
        } ${
          unlocked
            ? "bg-gradient-to-r from-[#FFF8E8] to-[#FFF3D5] border border-[#EED7A0]"
            : "bg-[#F8F8F8] border border-gray-200"
        }`}
      >
        {unlocked && site.image ? (
          <img
            src={site.image}
            alt={site.label}
            className="w-16 h-16 object-contain"
          />
        ) : (
          <Lock className="text-gray-400" />
        )}

        <div>
          <h3
            className={`font-bold ${
              unlocked ? "text-[#4B2E2A]" : "text-gray-500"
            }`}
          >
            {site.label}
          </h3>

          <p
            className={`text-sm ${
              unlocked ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {unlocked ? "Unlocked" : "Locked"}
          </p>
        </div>
      </div>
    );
  })}
</div>

        {/* Next Destination */}

        <div className="bg-[#7B1E23] rounded-3xl p-5 text-white mb-8">
          <h2 className="text-2xl font-bold">
            Next Destination
          </h2>

          <p className="mt-3 leading-7 text-white/90">
            Unlock another HeritageLink souvenir to continue your cultural
            journey across Nepal.
          </p>

          <button className="mt-6 bg-[#D6A94F] text-[#4B2E2A] font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            Explore Heritage Sites
          </button>
        </div>
      </div>

      <PremiumFooter />
    </div>
  );
};

export default HeritagePassport;