import React from "react";
import { Users, Gamepad2, Target, Rocket } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="text-white px-6 md:px-10 py-14 max-w-6xl mx-auto">

      <div className="text-center space-y-3 mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">About GameHub</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Your all-in-one destination to explore, discover, and download amazing games.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-xl border border-[#2e2e42]">
          <div className="flex items-center gap-3 mb-4">
            <Rocket size={28} className="text-blue-400" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Deliver a clean, fast, and smooth platform where gamers can enjoy curated content and stunning UI experiences.
          </p>
        </div>

        <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-xl border border-[#2e2e42]">
          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 size={28} className="text-green-400" />
            <h3 className="text-xl font-semibold">What We Offer</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            A library of games, detailed reviews, curated recommendations, and modern UI that enhances your gaming journey.
          </p>
        </div>

        <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-xl border border-[#2e2e42]">
          <div className="flex items-center gap-3 mb-4">
            <Users size={28} className="text-purple-400" />
            <h3 className="text-xl font-semibold">Our Community</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            A passionate audience who loves exploring games with beautiful visual design and modern interactions.
          </p>
        </div>

      </div>

      <div className="mt-16 p-8 bg-[#1a1a28] rounded-2xl shadow-lg border border-[#2d2d40]">
        <div className="flex items-center gap-3 mb-4">
          <Target size={30} className="text-red-400" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          At GameHub, our vision is to simplify the gaming discovery experience with 
          user-friendly interfaces, rich visuals, and fast performance — providing 
          gamers a platform they can trust and enjoy.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
