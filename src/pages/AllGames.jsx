import React, { useEffect, useState } from "react";
import useGamesData from "../hooks/useGamesData";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";

const AllGames = () => {
  useEffect(() => {
    document.title = "All Games | GameHub";
  }, []);

  const { gameData, loading } = useGamesData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("none"); // NEW

  const categories = ["all", "action", "adventure", "sports", "puzzle", "shooter","fps","rpg","strategy"];

  let filteredGames = gameData?.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || game.category.toLowerCase() === category;
    return matchesSearch && matchesCategory;
  });

  if (sortBy === "rating-high") {
    filteredGames = [...filteredGames].sort((a, b) => b.ratings - a.ratings);
  } else if (sortBy === "rating-low") {
    filteredGames = [...filteredGames].sort((a, b) => a.ratings - b.ratings);
  }

  return (
    <div className="pb-10">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white mt-4">
          Explore All Games
        </h1>
        <p className="text-gray-300 text-sm mt-1">
          Browse through the complete collection and discover something new.
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#141414] p-4 rounded-xl shadow-lg border border-gray-800">

        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg bg-[#0c0c0c] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-lg bg-[#0c0c0c] border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="capitalize">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg bg-[#0c0c0c] border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
        >
          <option value="none">Sort By</option>
          <option value="rating-high">Rating: High → Low</option>
          <option value="rating-low">Rating: Low → High</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {loading ? (
          <Skeleton count={12} />
        ) : filteredGames.length > 0 ? (
          filteredGames.map((data) => (
            <Card key={data.id} data={data} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 text-lg mt-10">
            ❌ No games found
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGames;
