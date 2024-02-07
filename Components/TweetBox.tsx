"use client";
import {
  CalendarIcon,
  FaceSmileIcon,
  GifIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/16/solid";
import React, { useState } from "react";

const TweetBox = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex">
      <img
        src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707091200&semt=ais"
        alt=""
        className="h-12 w-12 rounded-full object-cover "
      />
      <div className="flex flex-1 pl-2 items-center">
        <form action="" className="flex flex-1 flex-col">
          <input
            type="text"
            placeholder="What's Happening"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-12 text-xl outline-none  "
          />
          <div className="flex items-center wb-5">
            <div className="flex flex-1 space-x-4 p-2  text-twitter items-center ">
              <PhotoIcon className="w-5 h-5 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer " />
              <GifIcon className="w-5 h-5 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer " />
              <FaceSmileIcon className="w-5 h-5 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer " />
              <CalendarIcon className="w-5 h-5 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer " />
              <MapPinIcon className="w-5 h-5 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer " />
            </div>
            <button
              disabled={!input}
              className="bg-twitter rounded-3xl pl-3 pr-3 p-1 text-white font-bold disabled:bg-slate-400"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
