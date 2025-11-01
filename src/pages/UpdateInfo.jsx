import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const UpdateInfo = () => {
  const navigate = useNavigate();
  const { user, updateUserInfo, loading } = useContext(AuthContext);


  const [nameError, setNameError] = useState(null);
  const [photoError, setPhotoError] = useState(null);

  useEffect(() => {
    document.title = "Update Profile | Gamehub";
  }, []);

  if (loading) {
    return <Spinner></Spinner>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;


    const hasNumber = /[0-9]/;
    const hasNonWord = /[^a-zA-Z0-9 ]/;
    const imageUrlRegex = /^https?:\/\//i;


    setNameError(null);
    setPhotoError(null);


    let willReturn = false;

    if (hasNonWord.test(displayName) || hasNumber.test(displayName)) {
      setNameError('Name should not contain numbers or special characters.');
      willReturn = true;
    }

    if (!imageUrlRegex.test(photoURL)) {
      setPhotoError('Please enter a valid image URL.');
      willReturn = true;
    }

    if (willReturn) {
      return;
    }
    updateUserInfo({ displayName, photoURL })
      .then(() => {
        navigate("/profile");
        toast.success("Profile updated successfully", { autoClose: 1000 });
      })
      .catch((error) => {
        toast.error("Failed to update profile: " + error.code, { autoClose: 3000 });
      });

  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center text-white px-4">
      <div className="bg-[#10122b] rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center">
        Update Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="displayName"
              defaultValue={user.displayName}
              className="w-full px-4 py-2 rounded-lg bg-[#0c0d23] border border-gray-700 focus:border-blue-500 outline-none"
              required
            />
            {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              defaultValue={user.photoURL}
              className="w-full px-4 py-2 rounded-lg bg-[#0c0d23] border border-gray-700 focus:border-blue-500 outline-none"
              required
            />
            {photoError && <p className="text-red-500 text-sm mt-1">{photoError}</p>}
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 py-2 rounded-xl font-medium transition"
          >
            Save Changes
          </button>
        </form>
        <Link to='/profile'>
          <button
            className="w-full mt-3 bg-gray-600 hover:bg-gray-700 py-2 rounded-xl font-medium transition"
          >
            Cancel
          </button></Link>
      </div>
    </div>
  );
};

export default UpdateInfo;
