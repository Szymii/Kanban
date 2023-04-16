import Link from "next/link";
import React from "react";
import { Avatar } from "src/components/Avatar";

interface IProps {
  name: string;
  surname: string;
  avatarUrl?: string;
  profileUrl: string;
}

export const UserProfileCard = ({
  name,
  surname,
  avatarUrl,
  profileUrl,
}: IProps) => {
  return (
    <Link
      href={profileUrl}
      className="flex items-center space-x-4 p-4 hover:bg-gray-100"
    >
      <Avatar name={name} surname={surname} avatarUrl={avatarUrl} />
      <div className="pr-4">
        <div className="font-medium">{`${name} ${surname}`}</div>
        <div className="text-sm text-gray-500">View profile</div>
      </div>
    </Link>
  );
};
