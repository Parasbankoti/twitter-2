import React from "react";
import {
  BellIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import SidebarRow from "./SidebarRow";

export const Sidebar = () => {
  return (
    <div className="flex flex-col items-center mt-5 col-span-2  md:items-start">
      <img className="h-8 w-15 mb-5 ml-5" src="twtr.png" alt="" />

      <SidebarRow Icon={HomeIcon} title={"Home"} />
      <SidebarRow Icon={MagnifyingGlassIcon} title={"Search"} />
      <SidebarRow Icon={BellIcon} title={"Notification"} />
      <SidebarRow Icon={EnvelopeIcon} title={"Message"} />
      <SidebarRow Icon={UserCircleIcon} title={"User"} />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title={"More"} />
    </div>
  );
};
