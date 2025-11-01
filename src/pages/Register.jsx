import React, { useState, useEffect, useContext } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import TypingAnimation from '../components/TypingAnimation';

const Register = () => {

    useEffect(() => {
        document.title = "Register | GameHub";
    }, []);

    const { signInWithGoogle, createUser, updateUserInfo, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const [nameError, setNameError] = useState(null);
    const [photoError, setPhotoError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Login successful!', { autoClose: 1000 });
                navigate(location?.state || '/');
            }
            )
            .catch(error => {
                toast.error('Login failed: ' + error.code, { autoClose: 3000 });
                setLoading(false);
            });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const hasCapital = /[A-Z]/;
        const hasNumber = /[0-9]/;
        const hasNonWord = /[^a-zA-Z0-9 ]/;
        const hasSmall = /[a-z]/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const imageUrlRegex = /^https?:\/\//i;


        setEmailError(null);
        setPasswordError(null);
        setNameError(null);
        setPhotoError(null);
        

        let willReturn = false;

        if(hasNonWord.test(name) || hasNumber.test(name)){
            setNameError('Name should not contain numbers or special characters.');
            willReturn = true;
        }

        if(!imageUrlRegex.test(photo)){
            setPhotoError('Please enter a valid image URL.');
            willReturn = true;
        }

        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            willReturn = true;
        }

        if (!passwordRegex.test(password)) {
            if(password.length < 6){
                setPasswordError('Password must be at least 6 characters long.');
            }
            else if(!hasCapital.test(password)){
                setPasswordError('Password must contain at least one uppercase letter.');
            }
            else if(!hasSmall.test(password)){
                setPasswordError('Password must contain at least one lowercase letter.');
            }
            willReturn = true;
        }
        if(willReturn){
            return;
        }
        setSuccess(false);
        const updatedInfo = {
            displayName: name,
            photoURL: photo
        }
        createUser(email, password)
            .then(() => {
                setSuccess(true);
                event.target.reset();
                toast.success('Account created successfully!', { autoClose: 1000 });
                updateUserInfo(updatedInfo)
                    .then(() => {
                    })
                    .catch(() => {
                    })

                navigate('/');

            })
            .catch((error) => {
                toast.error('Registration failed: ' + error.code, { autoClose: 3000 });
            });
    }

    return (

        <div className="flex items-center justify-center bg-[#0B0B1C] text-white">
            <div className="card bg-[#14142B] w-full max-w-sm shrink-0 shadow-2xl px-8 py-10 border border-gray-700">
                <div className="text-center text-3xl font-semibold mb-6"><TypingAnimation to={"Create Account"} duration={1.5}></TypingAnimation></div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-gray-300 text-lg">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full bg-[#1B1B33] text-gray-300 focus:text-white focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-lg"
                            placeholder="Enter your name"
                            required
                        />
                        {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300 text-lg">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input w-full bg-[#1B1B33] text-gray-300 focus:text-white focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-lg"
                            placeholder="Enter photo URL"
                            required
                        />
                        {photoError && <p className="text-red-500 text-sm mt-1">{photoError}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300 text-lg">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full bg-[#1B1B33] text-gray-300 focus:text-white focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-lg"
                            placeholder="Enter your email"
                            required
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
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
                        {passwordError && <div className="text-red-500 text-sm mt-1">{passwordError}</div>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-lg font-semibold transition"
                    >
                        Register
                    </button>
                </form>

                <div className="divider text-gray-500">OR</div>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full mt-2 py-2 bg-white text-black rounded-lg border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >
                    <svg
                        aria-label="Google logo"
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path fill="#fff" d="M0 0h512v512H0z"></path>
                        <path
                            fill="#34a853"
                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                            fill="#4285f4"
                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                            fill="#fbbc02"
                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                            fill="#ea4335"
                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                    </svg>
                    Sign Up with Google
                </button>

                {success && (
                    <p className="text-green-500 mt-4 text-sm">Account created successfully!</p>
                )}

                <p className="text-center mt-6 text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-pink-400 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;