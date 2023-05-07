import React from "react";

interface IProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const EmptyAvatar = ({ size = "md" }: IProps) => {
  const avatarSize = {
    xs: "w-8",
    sm: "w-10",
    md: "w-12",
    lg: "w-20",
    xl: "w-48",
  };

  return (
    <div className="aspect-square">
      <div
        className={`${avatarSize[size]} flex h-full items-center justify-center rounded-full bg-slate-400`}
      >
        <svg
          width="356"
          height="356"
          className="h-6 w-6"
          viewBox="0 0 356 356"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M178 59.3335C193.736 59.3335 208.828 65.5847 219.955 76.7118C231.082 87.839 237.333 102.931 237.333 118.667C237.333 134.403 231.082 149.495 219.955 160.622C208.828 171.749 193.736 178 178 178C162.264 178 147.172 171.749 136.045 160.622C124.918 149.495 118.667 134.403 118.667 118.667C118.667 102.931 124.918 87.839 136.045 76.7118C147.172 65.5847 162.264 59.3335 178 59.3335ZM178 207.667C243.563 207.667 296.667 234.218 296.667 267V296.667H59.3333V267C59.3333 234.218 112.437 207.667 178 207.667Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
