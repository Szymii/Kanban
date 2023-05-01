import type { Type } from "@prisma/client";
import Link from "next/link";

import { Avatar } from "../Avatar";
import { TaskMeta } from "./TaskMeta";

interface IProps {
  text: string;
  number: number;
  type: Type;
  boardSlug: string;
  path: string;
  userId?: string;
  variant?: "block" | "inline";
}

export const TaskCard = ({
  variant = "block",
  number,
  type,
  text,
  boardSlug,
  path,
  userId,
}: IProps) => {
  if (variant === "block") {
    return (
      <div className="flex w-full flex-col bg-base-100 p-4 shadow-md">
        <Link href={path} className="line-clamp-3 hover:underline">
          {text}
        </Link>
        <div className="flex items-center justify-between pt-2">
          <TaskMeta number={number} type={type} boardSlug={boardSlug} />
          <Avatar name="B" surname="A" avatarUrl={""} size="xs" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-between bg-base-100 p-2 shadow-md">
      <div className="flex items-center gap-4">
        <TaskMeta number={number} type={type} boardSlug={boardSlug} />
        <Link
          href={path}
          className="max-w-[180px] truncate hover:underline md:max-w-md"
        >
          {text}
        </Link>
      </div>
      <Avatar name="B" surname="A" avatarUrl={""} size="xs" />
    </div>
  );
};
