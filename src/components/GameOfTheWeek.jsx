import React from "react";
import useGamesData from "../hooks/useGamesData";
import Spinner from "../components/Spinner";
import { Link } from "react-router";

const GameOfTheWeek = () => {
    const { gameData, loading } = useGamesData();

    if (loading) return <Spinner />;

    const game = [...gameData].sort((a, b) => b.ratings - a.ratings)[1];
    if (!game) return null;

    return (
        <div className="mt-20 mb-20  mx-auto">
            <h1 className="text-3xl  font-bold text-white mb-10">
                Game of the Week
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#18182c] border border-[#2c2c4d] p-6 md:p-10 rounded-2xl shadow-lg">

                {/* Image */}
                <div className="w-full">
                    <img
                        src={game.coverPhoto}
                        alt={game.title}
                        className="w-full h-[260px] md:h-[350px] lg:h-[400px] object-cover rounded-xl"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center text-white">
                    <h2 className="text-3xl  font-bold">{game.title}</h2>

                    <p className="mt-4 text-gray-300 text-lg leading-relaxed line-clamp-4">
                        {game.description}
                    </p>

                    <div className="mt-5 flex items-center gap-5">
                        <span className="text-yellow-400 text-2xl font-semibold">
                            ⭐ {game.ratings}
                        </span>
                        <span className="px-3 py-1 bg-[#232342] border border-[#33335a] rounded-lg text-sm">
                            {game.genre || "Action"} 
                        </span>
                    </div>

                    <Link to={`/game/${game.id}`}
                        className="mt-7 px-5 py-3 bg-[#1111D4] hover:bg-[#2626ff] transition rounded-lg font-medium w-fit"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default GameOfTheWeek;
