import React from 'react';
import { Star } from "lucide-react";
import { Link } from 'react-router';

const Card = ({ data }) => {
    
    const filledStars = Math.min(5, Math.round(data.ratings));

    return (
        <div className="block">
            <div className="bg-[#1b1b2d] rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.4)] 
                text-white w-full hover:scale-[1.04] hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)] 
                transition-all duration-300 border border-[#2b2b45]">

                <div className="relative w-full h-52 md:h-72">
                    <img
                        src={data.coverPhoto}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-4 space-y-2">

                    <h3 className="text-xl font-semibold line-clamp-1">
                        {data.title}
                    </h3>

                    <p className="text-sm text-gray-400 line-clamp-1">
                        {data.category}
                    </p>

                    <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={i < filledStars ? "text-yellow-400" : "text-gray-600"}
                                fill={i < filledStars ? "currentColor" : "none"}
                            />
                        ))}

                        <span className="text-gray-300 text-sm ml-1">
                            {Number(data.ratings).toFixed(1)}
                        </span>
                    </div>

                    <div className="pt-3">
                    <Link to={`/game/${data.id}`} >
                        <button className="w-full py-2 text-sm bg-[#1111d4] hover:bg-[#2626ff] 
                            rounded-lg font-medium transition">
                            View Details
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
