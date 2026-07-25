import React, { useState } from "react";
import {
  Mail,
  Lock,
  ArrowRight,
  Landmark,
  ScrollText,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import UnlockLoader from "../components/premium/UnlockLoader";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      //save JWT
      localStorage.setItem("token",response.data.token);

      //save user details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // If the user unlocked premium with an activation code earlier,
      // claim the badge now that we have a valid JWT (claim is protected).
      const pendingCode = localStorage.getItem("activationCode");

      if (pendingCode) {
        try {
          const claimResponse = await api.post(
            "/activation/claim",
            { code: pendingCode },
            {
              headers: {
                Authorization: `Bearer ${response.data.token}`,
              },
            }
          );

          // Claim succeeded, but they may have already owned this
          // site's badge from a previous code — let them know either way.
          if (claimResponse.data.alreadyOwned) {
            alert(claimResponse.data.message);
          }
        } catch (claimError) {
          // Login still succeeded even if the badge claim failed
          // (e.g. code already used) — don't block navigation.
          alert(
            claimError.response?.data?.message ||
              "Login successful, but the badge could not be claimed."
          );
        } finally {
          localStorage.removeItem("activationCode");
          localStorage.removeItem("activationSite");
        }
      }

      // Show the branded loading screen, then head to the passport
      // once it finishes playing.
      setShowLoader(true);
    }catch(error){
      alert(error.response?.data?.message|| "Login Failed");
    }
  };

  if (showLoader) {
    return (
      <UnlockLoader
        messages={[
          "Verifying Credentials",
          "Authenticating Explorer",
          "Syncing Heritage Badges",
          "Loading Your Passport",
        ]}
        subtitle="Welcome Back"
        loadingCaption="Preparing your Heritage Passport..."
        finishedTitle="Login Successful"
        finishedMessage="Your Heritage Passport is ready. Continue your journey across Nepal's cultural treasures."
        finishedTag="Access Granted"
        onComplete={() => navigate("/passport")}
      />
      
    );
  }

  return (
    <div className="min-h-screen bg-[#EFE8DE] flex items-center justify-center px-5 py-8">

      <div className="w-full max-w-md bg-[#F8F4EE] rounded-[35px] shadow-2xl overflow-hidden border border-[#E7DCC7]">

        {/* Passport Cover */}

        <div className="bg-[#7B1E23] px-8 py-10 text-center text-white">

          <Landmark
            size={55}
            className="mx-auto text-[#D6A94F]"
          />

          <p className="mt-4 tracking-[5px] uppercase text-sm text-[#F5E6B8]">
            HeritageLink
          </p>

          <h1 className="text-3xl font-bold tracking-[4px] mt-2">
            HERITAGE
          </h1>

          <h1 className="text-3xl font-bold tracking-[4px]">
            PASSPORT
          </h1>

          <div className="w-20 h-[2px] bg-[#D6A94F] mx-auto my-5"></div>

          <p className="italic text-[#F5E6B8] leading-7">
            Every Journey
            <br />
            Deserves To Be Remembered
          </p>

        </div>

        {/* Form */}

        <div className="px-8 py-8">

          <div className="flex items-center gap-2 justify-center text-[#7B1E23]">

            <ScrollText size={20} />

            <h2 className="text-2xl font-bold">
              Explorer Login
            </h2>

          </div>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-6"
          >

            {/* Email */}

            <div>

              <label className="text-[#4B2E2A] font-semibold">

                Passport Email

              </label>

              <div className="relative mt-2">

                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6A94F]"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#D6A94F] py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-[#D6A94F]"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="text-[#4B2E2A] font-semibold">

                Passport Key

              </label>

              <div className="relative mt-2">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6A94F]"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#D6A94F] py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-[#D6A94F]"
                />

              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-[#7B1E23] hover:bg-[#64161B] text-white py-3 rounded-2xl font-bold flex justify-center items-center gap-2 transition duration-300"
            >

              Continue Journey

              <ArrowRight size={20} />

            </button>

          </form>

          {/* Divider */}

          <div className="flex items-center my-8">

            <div className="flex-1 border-t border-[#D6A94F]"></div>

            <span className="mx-4 text-[#7B1E23] text-sm">
              NEW EXPLORER
            </span>

            <div className="flex-1 border-t border-[#D6A94F]"></div>

          </div>

          <Link to="/register">

            <button className="w-full border-2 border-[#D6A94F] rounded-2xl py-3 text-[#7B1E23] font-bold hover:bg-[#FFF5D8] transition">

              Issue Heritage Passport

            </button>

          </Link>

          {/* Passport Footer */}

          <div className="mt-10 text-center text-[#8B7355] text-sm">

            <p className="uppercase tracking-[3px]">
              Passport No.
            </p>

            <p className="font-bold text-[#4B2E2A] mt-1">
              HL-2026
            </p>

            <div className="w-16 h-[1px] bg-[#D6A94F] mx-auto my-4"></div>

            <p>
              Issued by
            </p>

            <p className="font-semibold">
              HeritageLink Nepal
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;