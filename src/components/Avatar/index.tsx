import Image from "next/image";
import React from "react";

interface IProps {
  avatarUrl?: string;
  name: string;
  surname: string;
}

export const Avatar = ({ avatarUrl, name, surname }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const initials = `${name[0]!} ${surname[0]!}`;

  if (avatarUrl)
    return (
      <div className="avatar">
        <div className="w-12 rounded-full">
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            fill
            className="rounded-full"
          />
        </div>
      </div>
    );

  return (
    <div className="placeholder avatar">
      <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
        <span>{initials}</span>
      </div>
    </div>
  );
};
