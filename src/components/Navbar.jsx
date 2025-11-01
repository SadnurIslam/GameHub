import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { IoGameController } from 'react-icons/io5';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {

    const { user, loading, signOutUser } = use(AuthContext);

    const isUserLoggedIn = !!user;

    const handleMenuClose = () => {
        document.activeElement?.blur();
    };

    const links = <>
        <li onClick={handleMenuClose} className='hover:scale-101 hover:underline rounded-sm p-2'><NavLink to='/'>Home</NavLink></li>
        <li onClick={handleMenuClose} className='hover:scale-101 hover:underline rounded-sm p-2 '><NavLink to='/games'>Games</NavLink></li>
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.info(`Bye Bye! ${user.displayName}`, { autoClose: 1000 });
            })
            .catch((error) => {
                toast.error('Sign out failed: ' + error.code, { autoClose: 3000 });
            });
    }


    return (
        <div className="navbar bg-[#101022] shadow-sm text-white flex">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                       id="menu-dropdown"
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-4xl font-bold text-white flex gap-5 items-center"><span className='hidden lg:block'><IoGameController /> </span><span>Gamehub</span></Link>
            </div>
            <div className="navbar-end flex items-center pr-2 md:pr-0">
                <ul className="hidden lg:flex gap-5">
                    {links}

                </ul>
                {
                    loading ?
                        <ul className='flex gap-3 ml-5 items-center'>
                            <li><Link to='/register' className='px-4 py-1  border-emerald-500 text-emerald-500 hover:bg-emerald-600 hover:text-white transition rounded-md ml-2'><span className="loading loading-dots loading-xs"></span></Link></li>
                            <li><Link to='/login' className='px-4 py-1  border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition rounded-md'><span className="loading loading-dots loading-xs"></span></Link></li>
                        </ul>
                        :
                        (
                            isUserLoggedIn ?
                                <ul className='flex items-center gap-5 ml-5'>
                                    <li><Link to='/profile'>
                                        <img className='w-9 h-9 rounded-full border-2 border-white/50 hover:border-white transition' src={user.photoURL} alt="" />
                                    </Link></li>
                                    <li><button onClick={handleSignOut} className='px-4 py-1 border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition rounded-md'>Logout</button></li>
                                </ul>
                                :
                                <ul className='flex gap-3 ml-5 items-center'>
                                    <li><Link to='/register' className='px-4 py-1 border border-emerald-500 text-emerald-500 hover:bg-emerald-600 hover:text-white transition rounded-md ml-2'>Register</Link></li>
                                    <li><Link to='/login' className='px-4 py-1 border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition rounded-md'>Login</Link></li>
                                </ul>
                        )
                }
            </div>
        </div>
    );
};

export default Navbar;