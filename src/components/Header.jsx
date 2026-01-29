import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/mainlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["Packages", "/packages"],
    ["Itineraries", "/itineraries"],
    ["Services", "/services"],
    ["Gallery", "/gallery"],
    ["Reviews", "/testimonials"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#edf2f6] border-b border-[#9ED3E6]/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Slogan */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Safar-e-Kashmir" className="h-12 w-auto" />
          <span className="hidden lg:block text-sm font-medium text-[#0E5A6F]">
            Explore Kashmir with Local Experts
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([label, path]) => (
            <Link
              key={label}
              to={path}
              className="relative text-[#0B2F33] text-sm font-medium hover:text-[#0E5A6F] group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#9ED3E6] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex px-6 py-2 rounded-full text-sm font-semibold
          bg-[#B8D92E] text-[#0B2F33] hover:bg-[#a9c92a] transition"
        >
          Plan My Trip
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0B2F33]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E6EBEF] border-t border-[#9ED3E6]/30 px-6 py-4 space-y-4">
          {navLinks.map(([label, path]) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block text-[#0B2F33] text-base font-medium hover:text-[#0E5A6F]"
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center mt-4 px-6 py-2 rounded-full
            bg-[#B8D92E] text-[#0B2F33] font-semibold"
          >
            Plan My Trip
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
