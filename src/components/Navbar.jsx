import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { IoGameController } from 'react-icons/io5';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, loading, signOutUser } = use(AuthContext);
    const isUserLoggedIn = !!user;

    const handleMenuClose = () => document.activeElement?.blur();

    const activeClass =
        "text-blue-400 font-semibold border-b-2 border-blue-500 pb-1";

    const links = (
        <>
            <li className="p-2">
                <NavLink
                    to="/"
                    onClick={handleMenuClose}
                    className={({ isActive }) =>
                        isActive ? activeClass : "hover:text-blue-300 transition"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="p-2">
                <NavLink
                    to="/games"
                    onClick={handleMenuClose}
                    className={({ isActive }) =>
                        isActive ? activeClass : "hover:text-blue-300 transition"
                    }
                >
                    Games
                </NavLink>
            </li>

            <li className="p-2"><NavLink to="/about"
                onClick={handleMenuClose}
                className={({ isActive }) =>
                    isActive ? activeClass : "hover:text-blue-300 transition"
                }
            >About</NavLink></li>
            <li className="p-2"><NavLink to="/contact"
                onClick={handleMenuClose}
                className={({ isActive }) =>
                    isActive ? activeClass : "hover:text-blue-300 transition"
                }
            >Contact</NavLink></li>
        </>
    );

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.info(`Bye Bye! ${user.displayName}`, { autoClose: 1000 });
            })
            .catch((error) => {
                toast.error("Sign out failed: " + error.code, { autoClose: 3000 });
            });
    };

    return (
        <nav className="navbar md:w-11/12  mx-auto py-4 bg-[#0d0d1a] text-white px-4 md:px-6 shadow-md border-b border-white/5 sticky top-0 z-50">

            <div className="navbar-start flex items-center gap-3">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost px-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h12M4 18h16" />
                        </svg>
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-3 w-52 p-4 bg-[#1b1b2e] rounded-xl shadow-lg space-y-2 border border-white/10"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl md:text-3xl font-bold flex items-center gap-2 hover:opacity-90 transition"
                >
                    <IoGameController className="text-blue-400 text-4xl hidden md:block" />
                    <span className="tracking-wide">GameHub</span>
                </Link>
            </div>

            <div className="navbar-end flex items-center gap-6">

                <ul className="hidden lg:flex gap-6 text-lg">{links}</ul>

                {loading ? (
                    <span className="loading loading-dots loading-md"></span>
                ) : isUserLoggedIn ? (
                    <div className="flex items-center gap-4">
                        <Link
                            to="/profile"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            <img
                                src={user.photoURL}
                                className="w-10 h-10 rounded-full border border-white/30 shadow-sm hover:scale-105 transition"
                            />
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="px-4 py-1.5 rounded-lg border border-pink-500 text-pink-400 
              hover:bg-pink-600 hover:text-white transition font-medium shadow-sm"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Link
                            to="/register"
                            className="px-4 py-1.5 rounded-lg border border-emerald-500 text-emerald-400 
              hover:bg-emerald-600 hover:text-white transition shadow-sm font-medium"
                        >
                            Register
                        </Link>
                        <Link
                            to="/login"
                            className="px-4 py-1.5 rounded-lg border border-pink-500 text-pink-400 
              hover:bg-pink-600 hover:text-white transition shadow-sm font-medium"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
