import Link from "next/link";
import React from "react";
import { Avatar } from "src/components/Avatar";

interface IProps {
  name: string;
  surname: string;
  avatarUrl?: string | null;
  logoutFunction: () => void;
}

export const UserProfileCard = ({
  name,
  surname,
  avatarUrl,
  logoutFunction,
}: IProps) => {
  return (
    <ul className="menu menu-horizontal bg-base-100">
      <li tabIndex={0}>
        <div className="flex items-center space-x-4 p-4">
          <Avatar name={name} surname={surname} avatarUrl={avatarUrl} />
          <div className="pr-4">
            <div className="font-medium">{`${name} ${surname}`}</div>
            <div className="text-sm text-gray-500">View profile</div>
          </div>
        </div>
        <ul className="z-10 w-full bg-base-100 shadow-sm">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li className="border-t border-gray-200">
            <a onClick={logoutFunction}>Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
