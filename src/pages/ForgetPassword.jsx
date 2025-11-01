import React, { use, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import TypingAnimation from '../components/TypingAnimation';

const ForgetPassword = () => {
    
    const {resetPassword, setLoading} = use(AuthContext);
    const location = useLocation();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    useEffect(() => {
        document.title = "Forget password | GameHub";
        if(location.state?.email){
            setEmail(location.state.email);
        }
    },[location.state]);

    const handlePasswordReset = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent! Please check your inbox.', { autoClose: 1000 });
                window.open('https://mail.google.com/mail/u/0/#inbox','_blank', "noopener,noreferrer");
                navigate('/login');
                setLoading(false);
            })
            .catch((error) => {
                toast.error('Error sending password reset email: ' + error.code, { autoClose: 3000 });
                setLoading(false);
            });
    }

    return (
        <div className="flex items-center justify-center bg-[#0B0B1C] text-white mt-10 ">
            <div className="bg-[#14142B] px-10 py-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-700">
                <div className="text-3xl font-bold text-center mb-2"><TypingAnimation to={"Forgot Password?"} duration={1.5}></TypingAnimation></div>
                <p className="text-gray-400 text-center mb-6 text-sm">
                    Enter your email to receive a password reset link.
                </p>

                <form onSubmit={handlePasswordReset}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={email}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-[#1B1B33] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-100"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition font-semibold mt-4"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-400">
                        Remembered your password?{" "}
                        <Link to="/login" className="text-pink-500 hover:underline">
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );

};

export default ForgetPassword;