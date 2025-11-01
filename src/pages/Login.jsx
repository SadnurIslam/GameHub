import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import TypingAnimation from '../components/TypingAnimation';

const Login = () => {

    useEffect(() => {
        document.title = "Login | GameHub";
    }, []);

    const { signInWithGoogle,  signInUser, setLoading} = use(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handlePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }


    const location = useLocation();


    const handleGoogleSignIn = () => {
        setError(null);
        signInWithGoogle()
            .then(() => {
                navigate(location?.state || '/');
            }
            )
            .catch((error) => {
                setError(error.code);
                setLoading(false);
            });
    }



    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then(() => {
                event.target.reset();
                navigate(location?.state || '/');
                toast.success('Login successful!', { autoClose: 1000 });
            })
            .catch(error => {
                setError('Login failed: ' + error.code);
                setLoading(false);
            }
            )
    }

    const handleForgetPassword = () => {
        navigate('/forget-password', {state: {email: email}} );
    }



    return (
        <div className="flex items-center justify-center bg-[#0B0B1C] text-white ">
            <div className="card bg-[#14142B] w-full max-w-sm shrink-0 shadow-2xl px-8 py-10 border border-gray-700">
                <div className="text-center text-3xl font-semibold mb-6"><TypingAnimation to={"Welcome Back!"} duration={1.5}></TypingAnimation></div>

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-gray-300 text-lg">Email</label>
                        <input
                            name="email"
                            type="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="input w-full bg-[#1B1B33] text-gray-300 focus:text-white focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-lg"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300 text-lg">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="input w-full bg-[#1B1B33] text-gray-300 focus:text-white focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-lg"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-400 hover:text-white z-10"
                                onClick={handlePasswordShow}
                            >
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                        </div>
                        <div className="text-right mt-1">
                            <p  onClick={handleForgetPassword} className="text-sm text-pink-400 hover:underline cursor-pointer">
                                Forgot password?
                            </p>
                        </div>
                    </div>

                    {
                        error && <p className="text-red-500 text-sm">{error}</p>
                    }

                    <button
                        type="submit"
                        className="w-full py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-lg font-semibold transition"
                    >
                        Login
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full mt-4 py-2 bg-white text-black rounded-lg border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >
                    <svg
                        aria-label="Google logo"
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path fill="#fff" d="M0 0h512v512H0z"></path>
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </svg>
                    Login with Google
                </button>

                <p className="text-center mt-6 text-sm text-gray-400">
                    New here?{" "}
                    <Link to="/register" className="text-pink-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;