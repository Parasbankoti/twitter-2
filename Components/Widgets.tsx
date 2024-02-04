"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="px-2 mt-2 ">
      <div className="flex items-center  rounded-full p-2 mb-5 bg-slate-300">
        <MagnifyingGlassIcon className="h-7 w-7 ml-2" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none shadow-pink-800 ml-2 items-center bg-transparent"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="PMOIndia"
        options={{ height: 400 }}
      />
    </div>
  );
};

export default Widgets;
