import React from 'react';

const Newsletter = () => {
    return (
        <div className='text-center mt-24 mb-5 md:mt-40 md:mb-20 w-11/12 md:w-10/12 mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-7 md:mb-10'>Get the latest on our games and exclusive content</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3   w-10/12 lg:w-9/12 mx-auto'>
                <input type="email" placeholder="Enter your email" className="px-5 h-12 md:h-16 text-lg rounded-lg w-full md:col-span-3  input input-bordered bg-[#222247] text-gray-500" />
                <button className="rounded-lg btn bg-[#1111D4] w-full text-lg h-12 md:h-16">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;