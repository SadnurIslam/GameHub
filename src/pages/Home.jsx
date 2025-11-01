import React,{useEffect} from 'react';
import Banner from '../components/Banner';
import Popular from '../components/Popular';
import Newsletter from '../components/Newsletter';

const Home = () => {
    useEffect(() => {
        document.title = "Home | GameHub";
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;