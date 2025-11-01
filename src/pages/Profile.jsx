import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import Spinner from "../components/Spinner";
import gsap from "gsap";
import TypingAnimation from "../components/TypingAnimation";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile | Gamehub";
  }, []);

  const { user, loading } = useContext(AuthContext);

  const imgRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (!loading && user) {
      const ctx = gsap.context(() => {
        gsap.from(nameRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.6,
          ease: "power1.out",
        });
        gsap.from(imgRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.6,
          ease: "power1.out",
        });
      });

      return () => ctx.revert();
    }
  }, [loading, user]);

  return (
    <div className="flex justify-center items-center text-white py-5">
      <div className="bg-[#10122b] rounded-2xl shadow-xl p-8 w-full max-w-md text-center border border-gray-700">
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold mb-5"><TypingAnimation to={"My Profile"} duration={1}></TypingAnimation></div>

            <div ref={imgRef} className="relative mb-3">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />

              <div className="absolute inset-0 rounded-full border-4 border-blue-500 blur-md opacity-40 animate-pulse"></div>
            </div>

            <div ref={nameRef}>
              <h2 className="text-gray-300 text-sm  tracking-wide">Name:</h2>
              <h2 className="text-lg font-bold mb-3">{user.displayName}</h2>

              <h2 className="text-gray-300 text-sm  tracking-wide">Email:</h2>
              <p className="text-lg font-bold mb-3">{user.email}</p>

              <h2 className="text-gray-300 text-sm  tracking-wide">Joined At:</h2>
              <p className="text-md font-bold mb-3">{user.metadata.creationTime}</p>
            </div>

            <Link
              to="/update-info"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-medium transition my-3"
            >
              Edit Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
