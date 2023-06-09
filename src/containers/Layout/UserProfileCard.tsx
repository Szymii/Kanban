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
    <div className="dropdown-bottom dropdown-end dropdown">
      <label tabIndex={0} className="m-1 cursor-pointer bg-slate-200">
        <div className="flex items-center space-x-4 p-4 hover:bg-slate-100">
          <Avatar name={name} surname={surname} avatarUrl={avatarUrl} />
          <div className="pr-4">
            <div className="font-medium">{`${name} ${surname}`}</div>
            <div className="text-sm text-gray-500">View profile</div>
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-10 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <a onClick={logoutFunction}>Logout</a>
        </li>
      </ul>
    </div>
  );
};
