import heroImage from "../assets/images/baghbhairavtemple.png";

const Hero = () => {
  return (
    <section id="home" className="relative h-[88vh] overflow-hidden" >

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Bagh Bhairav Temple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#23252A]/20 via-[#23252A]/40 to-[#23252A]/80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-14">

        {/* Small Badge */}
        <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs tracking-widest uppercase">
          Kirtipur, Nepal
        </span>

        {/* Title */}
        <h1 className="mt-5 text-4xl font-bold leading-tight text-white">
          Bagh Bhairav Temple:
          <br />
          The Tiger Sentinel
        </h1>

        {/* Description */}
        <p className="mt-4 text-white/85 leading-7 text-sm">
          Standing as a silent guardian of Kirtipur for centuries,
          this ancient fortress temple preserves the spirit of
          Newar warriors and the divine protection of Bhairav.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">

          <a
            href="#audio"
            className="bg-[#B08D57] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
          >
          Listen Preview
          </a>

          <button
          onClick={() =>
            document.getElementById("why").scrollIntoView({
            behavior: "smooth",
        })
        }
        className="border border-white text-white px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition"
      >
        Discover Site
      </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;