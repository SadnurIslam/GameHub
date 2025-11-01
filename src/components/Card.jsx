import React from 'react';
import { Star } from "lucide-react";
import { Link } from 'react-router';

const Card = ({ data }) => {

    return (
        <Link to={`/game/${data.id}`}>
            <div className="game-card bg-[#1e1e2f] rounded-xl overflow-hidden shadow-lg text-white w-full hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                <img
                    src={data.coverPhoto}
                    alt={data.title}
                    className="w-full h-52 md:h-72 object-fit"
                />

                <div className="space-y-1 py-5 px-2">
                    <h3 className="text-lg font-semibold line-clamp-1">{data.title}</h3>
                    <p className="text-sm text-gray-400">{data.category}</p>

                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star key={0} size={16} fill="currentColor" />
                        <Star key={1} size={16} fill="currentColor" />
                        <Star key={2} size={16} fill="currentColor" />
                        <Star key={3} size={16} fill="currentColor" />
                        <Star key={4} size={16} fill="currentColor" />

                        <span className="text-gray-300 text-sm ml-1">({data.ratings})</span>
                    </div>
                </div>
            </div>
        </Link>
    );


};

export default Card;