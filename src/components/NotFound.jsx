import React from 'react';
import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="my-16 flex flex-col items-center justify-center p-6">
            <div className="rounded-2xl shadow-lg p-8 text-center max-w-md">
                <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-100 mb-2">No Game Found</h1>
                <p className="text-gray-500 mb-6">
                    Oops! The game you are looking for does not exist. It might have been removed or the URL is incorrect.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;