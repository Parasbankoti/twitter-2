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
    <div className="flex-col ">
      <img className="h-8 w-15" src="twtr.png" alt="" />

      <SidebarRow Icon={HomeIcon} title={"Home"} />
      <SidebarRow Icon={MagnifyingGlassIcon} title={"Search"} />
      <SidebarRow Icon={BellIcon} title={"Notification"} />
      <SidebarRow Icon={EnvelopeIcon} title={"Message"} />
      <SidebarRow Icon={UserCircleIcon} title={"User"} />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title={"More"} />
    </div>
  );
};
