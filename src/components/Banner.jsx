import React from 'react';
import useGamesData from '../hooks/useGamesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Spinner from '../components/Spinner';

const Banner = () => {
    const { gameData, loading } = useGamesData();
    const data = gameData.slice(0, 4); 

    if (loading) return <Spinner></Spinner>

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                className="rounded-2xl overflow-hidden"
            >
                {data.map((game, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[60vh] md:h-[65vh] lg:h-[70vh]">
                            <div className='w-full h-full'>
                                <img
                                    src={game.coverPhoto}
                                    className="w-full h-full object-fit"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6">
                                <h2 className="text-2xl font-bold">{game.title}</h2>
                                <p className="mt-2 text-md line-clamp-1 w-8/12 lg:w-5/12">{game.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
