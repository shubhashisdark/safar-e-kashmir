import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// HERO IMAGES
// HERO IMAGES
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";

// DESTINATIONS
import srinagar from "../assets/destinations/srinagar.jpg";
import sonamarg from "../assets/destinations/sonamarg.jpg";
import ladakh from "../assets/destinations/ladakh.avif";
import katra from "../assets/hero/katra.avif";
import gulmarg from "../assets/hero/gulmarg.jpg";
import pahalgam from "../assets/hero/pehelgham.jpg";
const heroSlides = [
  {
    img: hero1,
    title: "Explore Kashmir with Local Experts",
    sub: "Personalized tours • Trusted guides • 4.9★ rated experiences",
  },
  {
    img: hero2,
    title: "Blue Lakes, Snow Peaks & Silent Valleys",
    sub: "Dal Lake • Gulmarg • Pahalgam • Sonamarg",
  },
  {
    img: hero3,
    title: "Journeys Designed Around You",
    sub: "Family • Honeymoon • Pilgrimage • Adventure",
  },
];

const destinations = {
  Srinagar: srinagar,
  Gulmarg: gulmarg,
  Pahalgam: pahalgam,
  Sonamarg: sonamarg,
  "Leh–Ladakh": ladakh,
  Katra: katra,
};


const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setHeroIndex((p) => (p + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[95vh]">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              heroIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={s.img} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B2F33]/60 to-[#0B2F33]/80" />

            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="max-w-4xl text-white animate-slideUp">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
                  {s.title}
                </h1>
                <p className="text-base md:text-lg mb-8 text-blue-100">
                  {s.sub}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-[#B8D92E] text-[#0B2F33] px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                  >
                    Plan My Trip
                  </Link>
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    className="border border-blue-200 px-8 py-3 rounded-full hover:bg-white hover:text-[#0B2F33] transition"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ================= TRIP PLANNER ================= */}
      <section className="bg-[#48c15cc5] py-14 px-6 text-center">
        <h2 className="text-2xl font-semibold text-[#0B2F33] mb-8">
          Plan Your Kashmir Trip
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4">
          <select className="p-3 rounded border focus:ring-2 focus:ring-[#1E81B0]">
            <option>Travel Month</option>
          </select>
          <select className="p-3 rounded border">
            <option>No. of People</option>
          </select>
          <select className="p-3 rounded border">
            <option>Tour Type</option>
          </select>
          <button className="bg-[#1E81B0] text-white rounded p-3 hover:bg-[#0E5A6F] transition">
            Get Free Itinerary
          </button>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-12 text-[#0B2F33]">
          Popular Kashmir Packages
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            ["Paradise on Earth", "7D/6N", "₹24,999"],
            ["Kashmir Delight", "4D/3N", "₹14,999"],
            ["Honeymoon Special", "5D/4N", "₹19,999"],
            ["Vaishno Devi with Kashmir", "9D/8N", "₹32,999"],
          ].map((p) => (
            <div
              key={p[0]}
              className="bg-white border rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-[#0B2F33]">
                {p[0]}
              </h3>
              <p className="text-sm text-gray-500">{p[1]}</p>
              <p className="text-xl font-bold text-[#1E81B0] my-4">
                {p[2]}
              </p>
              <Link
                to="/packages"
                className="text-[#1E81B0] font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="bg-[#F0F7FA] py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-12 text-[#0B2F33]">
          Popular Destinations
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(destinations).map(([name, img]) => (
            <div
              key={name}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={img}
                className="h-48 w-full object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= WHY SAFAR-E-KASHMIR ================= */}
<section className="py-16 px-6 bg-white">
  <h2 className="text-2xl font-semibold text-center mb-12 text-[#0B2F33]">
    Why Travel With Safar-e-Kashmir
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
    {[
      "Local Kashmiri Experts",
      "Customized Itineraries",
      "Transparent Pricing",
      "24/7 On-Trip Support",
      "4.9★ Rated Experiences",
    ].map((item) => (
      <div
        key={item}
        className="bg-[#F0F7FA] rounded-xl p-5 hover:shadow-md transition"
      >
        <p className="font-medium text-[#0B2F33]">{item}</p>
      </div>
    ))}
  </div>
</section>
{/* ================= KASHMIR BY SEASON ================= */}
<section className="bg-[#F0F7FA] py-16 px-6">
  <h2 className="text-2xl font-semibold text-center mb-12 text-[#0B2F33]">
    Kashmir Through the Seasons
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[
      ["Spring", "Tulip Festival & Gardens"],
      ["Summer", "Valleys, Lakes & Sightseeing"],
      ["Autumn", "Golden Landscapes & Photography"],
      ["Winter", "Snowfall, Skiing & Gondola"],
    ].map(([season, desc]) => (
      <div
        key={season}
        className="bg-white p-6 rounded-xl border hover:shadow-lg transition"
      >
        <h3 className="font-semibold text-lg text-[#1E81B0] mb-2">
          {season}
        </h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    ))}
  </div>
</section>
{/* ================= HOW IT WORKS ================= */}
<section className="py-16 px-6 bg-white">
  <h2 className="text-2xl font-semibold text-center mb-12 text-[#0B2F33]">
    How Your Kashmir Trip Works
  </h2>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {[
      ["1️⃣ Share Your Plan", "Tell us dates, people & preferences"],
      ["2️⃣ Get Custom Itinerary", "We design a trip just for you"],
      ["3️⃣ Travel Stress-Free", "Enjoy Kashmir with local support"],
    ].map(([title, desc]) => (
      <div
        key={title}
        className="p-6 rounded-xl bg-[#F0F7FA] hover:shadow-md transition"
      >
        <h3 className="font-semibold mb-3 text-[#1E81B0]">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    ))}
  </div>
</section>
{/* ================= TESTIMONIALS ================= */}
<section className="bg-[#0B2F33] py-16 px-6 text-white text-center">
  <h2 className="text-2xl font-semibold mb-12">
    What Travelers Say About Us
  </h2>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      ["Amit, Delhi", "Amazing trip! Everything was well managed."],
      ["Sara, Mumbai", "Best Kashmir experience with local guidance."],
    ].map(([name, review]) => (
      <div
        key={name}
        className="bg-white/10 rounded-xl p-6"
      >
        <p className="italic mb-3">“{review}”</p>
        <p className="font-medium">{name}</p>
      </div>
    ))}
  </div>
</section>





      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#0E5A6F] text-white py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Plan your Kashmir journey with people who live here
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-[#B8D92E] text-[#0B2F33] px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Get Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default Home;
