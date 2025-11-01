import React, { useEffect } from 'react';
import useGamesData from '../hooks/useGamesData';
import Card from '../components/Card';
import Skeleton from '../components/Skeleton';


const AllGames = () => {

    useEffect(() => {
        document.title = "Profile | Gamehub";
    }, []);

    const { gameData, loading } = useGamesData();

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl md:text-4xl font-bold text-white my-2'>
                    Explore All Games
                </h1>
                <p className='text-gray-200 text-sm'>
                    Dive into our complete game collection — from thrilling adventures to
                    relaxing puzzles. Find your next favorite game here.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 lg:gap-4 mt-12'>
                {
                    loading ? (
                        <Skeleton count={12}></Skeleton>
                    ) : (
                        gameData.map(data => <Card key={data.id} data={data}></Card>)
                    )

                }
            </div>
        </div>
    );
};

export default AllGames;