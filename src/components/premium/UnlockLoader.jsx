import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const defaultMessages = [
  "Verifying Activation Code",
  "Authenticating Artifact",
  "Connecting to Heritage",
  "Loading Premium Experience",
];

const UnlockLoader = ({
  onComplete,
  messages = defaultMessages,
  subtitle = "Unlocking Heritage",
  loadingCaption = "Preparing your premium cultural experience...",
  finishedTitle = "Heritage Activated",
  finishedMessage = "Your HeritageLink souvenir has been successfully authenticated. Welcome to the complete heritage experience.",
  finishedTag = "Authentication Successful",
}) => {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (step < messages.length - 1) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setFinished(true);

        setTimeout(() => {
          onComplete();
        }, 1800);

      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [step, onComplete, messages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const progress = ((step + 1) / messages.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#1B1B1B] via-[#23252A] to-black flex flex-col items-center justify-center text-center px-8 overflow-hidden">

      <div className="absolute w-80 h-80 rounded-full bg-[#D6A94F]/10 blur-3xl animate-pulse"></div>

      {!finished ? (
        <>
          <h1 className="relative text-5xl font-bold text-[#D6A94F] drop-shadow-[0_0_20px_#D6A94F]">
            HeritageLink
          </h1>

          <p className="relative mt-2 uppercase tracking-[6px] text-[#F3E8CC] text-sm">
            {subtitle}
          </p>

          <div className="relative mt-14">
            <div className="absolute -inset-5 rounded-full bg-[#D6A94F]/20 blur-2xl animate-pulse"></div>
            <div className="w-24 h-24 rounded-full border-4 border-[#D6A94F]/20"></div>
            <div className="absolute inset-0 w-24 h-24 rounded-full border-t-4 border-[#D6A94F] animate-spin"></div>
            <div className="absolute inset-3 rounded-full bg-[#D6A94F]/10"></div>
          </div>

          <h2 className="relative mt-12 text-2xl font-bold text-white">
            {messages[step]}
            <span className="text-[#D6A94F]">{dots}</span>
          </h2>

          <p className="mt-4 text-[#CFCFCF]">
            {loadingCaption}
          </p>

          <div className="relative w-72 h-3 rounded-full bg-[#4B4B4B] overflow-hidden mt-10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#D6A94F] via-[#F0CB6E] to-[#FFE7A3] transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-4 text-[#D6A94F] font-semibold tracking-wide">
            {Math.round(progress)}% Completed
          </p>
        </>
      ) : (
        <>
          <CheckCircle2 size={90} className="text-green-400 animate-pulse" />

          <h2 className="mt-8 text-4xl font-bold text-white">
            {finishedTitle}
          </h2>

          <p className="mt-5 max-w-sm leading-8 text-[#E9DDC5]">
            {finishedMessage}
          </p>

          <div className="mt-8 flex items-center gap-3 text-green-400">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <span className="font-semibold">{finishedTag}</span>
          </div>

          <div className="mt-8 w-24 h-1 rounded-full bg-[#D6A94F]"></div>
        </>
      )}

    </div>
  );
};

export default UnlockLoader;