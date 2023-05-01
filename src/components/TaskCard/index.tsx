import type { Type } from "@prisma/client";

import { Avatar } from "../Avatar";
import { TaskMeta } from "./TaskMeta";

interface IProps {
  text: string;
  number: number;
  type: Type;
  boardSlug: string;
  userId?: string;
  variant?: "block" | "inline";
}

export const TaskCard = ({
  variant = "block",
  number,
  type,
  text,
  boardSlug,
  userId,
}: IProps) => {
  if (variant === "block") {
    return (
      <div className="flex w-full flex-col bg-base-100 p-4 shadow-md">
        <div className="line-clamp-3">{text}</div>
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
        <div className="max-w-md truncate">{text}</div>
      </div>
      <Avatar name="B" surname="A" avatarUrl={""} size="xs" />
    </div>
  );
};
