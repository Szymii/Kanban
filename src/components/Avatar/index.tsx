import Image from "next/image";
import React from "react";

interface IProps {
  size?: "sm" | "md" | "lg" | "xl";
  avatarUrl?: string | null;
  name: string;
  surname: string;
}

export const Avatar = ({ avatarUrl, name, surname, size = "md" }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const initials = `${name[0]!} ${surname[0]!}`;

  const avatarSize = {
    sm: "w-10",
    md: "w-12",
    lg: "w-20",
    xl: "w-48",
  };

  const fontSize = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-3xl",
    xl: "text-7xl",
  };

  if (avatarUrl)
    return (
      <div className="avatar">
        <div className={`${avatarSize[size]} rounded-full`}>
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
      <div
        className={`${avatarSize[size]} rounded-full bg-neutral-focus text-neutral-content`}
      >
        <span className={`${fontSize[size]}`}>{initials}</span>
      </div>
    </div>
  );
};
