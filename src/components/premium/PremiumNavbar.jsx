import { UserCircle2, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PremiumNavbar = ({ site }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#4B2E2A]/95 backdrop-blur-md border border-[#6A4A46] rounded-2xl shadow-lg flex justify-between items-center px-5 md:px-8 py-4">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={18}
                className="text-[#D6A94F]"
              />

              <span className="text-[#D6A94F] text-xs uppercase tracking-widest font-semibold">
                Heritage Passport
              </span>
            </div>

            <h2 className="text-white text-lg font-bold mt-1">
              {site?.name
                ? `${site.name} Explorer`
                : "Heritage Explorer"}
            </h2>
          </div>

          {/* Profile */}
          <button
            onClick={() => navigate("/passport")}
            className="transition hover:scale-110"
          >
            <UserCircle2
              size={34}
              className="text-[#D6A94F]"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default PremiumNavbar;