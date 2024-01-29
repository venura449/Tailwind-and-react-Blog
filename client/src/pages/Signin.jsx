import React, { useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userslice";
import { useDispatch, useSelector } from "react-redux";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure('Please fill out all the fields'));
      return;
    }
    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Sign in failed. Please try again.");
      }

      dispatch(signInSuccess());
      navigate("/Home");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="mt-20 mb-20">
      <div className="gap-5 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <Link to="/Home" className="font-bold dark:text-white text-4xl">
            <span className="ml-2 mr-2 px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Venu's
            </span>{" "}
            blog
          </Link>
          <p className="text-sm mt-5">
            "In the realm of code and creativity, my blog becomes the canvas
            where I paint with the strokes of algorithms and the colors of
            innovation. Join me on this journey through the digital landscape,
            where each post is a chapter in the story of my passion for software
            engineering and the art of turning ideas into lines of code."
          </p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <div>
              {/* You can add any additional content here */}
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="someone@example.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
gradientDuoTone="purpleToPink"
              type="submit"
              onClick={submitHandler}
              disabled={loading}
            >
              {loading ? (
                <>
<spinner size="sm" />
                  <span className="pl-3">Signing In....</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            <div className="flex gap-2 text-sm mt-5">
              <span>Don't have an Account</span>
              <Link to="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
