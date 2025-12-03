import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='bg-[#101022] '>
            {/* <header className='md:w-11/12  mx-auto py-4'> */}
                <Navbar></Navbar>
            {/* </header> */}
            <main className='w-11/12 mx-auto py-7 min-h-screen'>
                <Outlet></Outlet>
            </main>
            <div className='bg-base-500 mt-20'>
                <div className='md:w-11/12 mx-auto'>
                    <Footer></Footer>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;