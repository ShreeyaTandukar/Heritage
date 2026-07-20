import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Audio Guide", link: "#audio" },
    { name: "Meet the Artisan", link: "#artisan" },
    { name: "Gallery", link: "#gallery" },
    { name: "Hidden Story", link: "#story" },
    { name: "Collect Badge", link: "#badge" },
    { name: "Why Choose Us", link: "#why" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#F8F4EE]/90 backdrop-blur-md border-b border-[#E8DFC9]">

      <div className="max-w-md mx-auto flex items-center justify-between px-4 py-3">

        <div>
          <h1 className="text-lg font-semibold text-[#6B0F1A]">
            HeritageLink
          </h1>

          <p className="text-[9px] uppercase tracking-[4px] text-[#B08D57] mt-1">
            Nepal
          </p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center"
        >
          {open ? (
            <X size={22} className="text-[#6B0F1A]" />
          ) : (
            <Menu size={22} className="text-[#6B0F1A]" />
          )}
        </button>

      </div>

      {open && (
        <div className="max-w-md mx-auto bg-white shadow-xl rounded-b-3xl">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-gray-100 hover:bg-[#FFF8EA] text-[#4B2E2A] font-medium transition"
            >
              {item.name}
            </a>
          ))}

        </div>
      )}

    </header>
  );
};

export default Navbar;