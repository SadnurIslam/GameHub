import React,{useEffect} from 'react';
import Banner from '../components/Banner';
import Popular from '../components/Popular';
import Newsletter from '../components/Newsletter';
import FeaturedCategories from '../components/FeaturedCategories';
import Trending from '../components/Trending';
import GameOfTheWeek from '../components/GameOfTheWeek';

const Home = () => {
    useEffect(() => {
        document.title = "Home | GameHub";
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <FeaturedCategories></FeaturedCategories>
            {/* <Trending></Trending> */}
            <GameOfTheWeek></GameOfTheWeek>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;