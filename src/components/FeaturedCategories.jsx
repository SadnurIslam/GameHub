import React from "react";
import { FaGamepad, FaCar, FaDragon, FaGhost, FaRunning, FaBrain } from "react-icons/fa";

const categories = [
    { name: "Action", icon: <FaRunning size={35} /> },
    { name: "Adventure", icon: <FaDragon size={35} /> },
    { name: "Racing", icon: <FaCar size={35} /> },
    { name: "Horror", icon: <FaGhost size={35} /> },
    { name: "Shooter", icon: <FaGamepad size={35} /> },
    { name: "Strategy", icon: <FaBrain size={35} /> },
];

const FeaturedCategories = () => {
    return (
        <div className="mt-16 mb-10  mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">
                Featured Categories
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="bg-[#1a1a33] hover:bg-[#232342] border border-[#2c2c4d] 
                        rounded-xl p-5 flex flex-col items-center justify-center text-center 
                        cursor-pointer hover:scale-105 transition"
                    >
                        <div className="text-emerald-400 mb-3">
                            {cat.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
