import React from 'react';
import useGamesData from '../hooks/useGamesData';
import Card from '../components/Card';
import Skeleton from './Skeleton';

const Popular = () => {

    const { gameData, loading } = useGamesData();

    const sortedData = [...gameData].sort((a, b) => b.ratings - a.ratings);
    const data = sortedData.slice(0, 4);

    return (
        <div className='py-8 mt-4'>
            <h1 className='text-3xl font-bold text-white mb-8'>
                Popular Games
            </h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 lg:gap-4'>
                {
                    loading ? (
                        <Skeleton count={4}></Skeleton>
                    ) : (
                        data.map(data => <Card key={data.id} data={data}></Card>)
                    )
                    
                }
            </div>
        </div>
    );
};

export default Popular;