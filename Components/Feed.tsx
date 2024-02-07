import { ArrowPathIcon } from "@heroicons/react/16/solid";
import React from "react";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    // col span 7 when small, and span 5 when it is large, tailwind goes from small to large screens
    <div className="p-2 col-span-7 lg:col-span-5">
      <div className="flex justify-between  items-center">
        <h1 className="text-xl font-bold	">Home</h1>
        <ArrowPathIcon
          className="w-8 h-8 cursor-pointer text-twitter transition-all duration-500 ease-out
      hover:rotate-180 active:scale-150 "
        />
      </div>
      <div>
        <TweetBox />
      </div>
    </div>
  );
};

export default Feed;
