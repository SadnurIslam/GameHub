import React from "react";
import useGamesData from "../hooks/useGamesData";
import Card from "../components/Card";
import Skeleton from "./Skeleton";

const Trending = () => {
    const { gameData, loading } = useGamesData();

    const trendingData = [...gameData]
        .sort((a, b) => (b.ratings + (b.playCount || 0)) - (a.ratings + (a.playCount || 0)))
        .slice(0, 4);

    return (
        <div className="mt-16 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Trending This Week
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 lg:gap-4">
                {
                    loading ? (
                        <Skeleton count={4} />
                    ) : (
                        trendingData.map(game => (
                            <Card key={game.id} data={game} />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Trending;
