import type { TaskType } from "@prisma/client";
import Link from "next/link";
import { type IUser } from "src/modules/profile";

import { Avatar, EmptyAvatar } from "../Avatar";
import { TaskMeta } from "./TaskMeta";

interface IProps {
  text: string;
  number: number;
  type: TaskType;
  boardSlug: string;
  path: string;
  variant?: "block" | "inline";
  assignedUser?: Omit<IUser, "id">;
}

export const TaskCard = ({
  variant = "block",
  number,
  type,
  text,
  boardSlug,
  path,
  assignedUser,
}: IProps) => {
  if (variant === "block") {
    return (
      <div className="flex w-full flex-col bg-base-100 p-4 shadow-md">
        <Link href={path} className="line-clamp-3 hover:underline">
          {text}
        </Link>
        <div className="flex items-center justify-between pt-2">
          <TaskMeta number={number} type={type} boardSlug={boardSlug} />
          {assignedUser ? (
            <div
              className="tooltip"
              data-tip={`${assignedUser.firstName} ${assignedUser.lastName}`}
            >
              <Avatar
                name={assignedUser.firstName}
                surname={assignedUser.lastName}
                avatarUrl={assignedUser.image}
                size="xs"
              />
            </div>
          ) : (
            <div className="tooltip" data-tip="Not assigned">
              <EmptyAvatar size="xs" />
            </div>
          )}
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
      {assignedUser ? (
        <div
          className="tooltip"
          data-tip={`${assignedUser.firstName} ${assignedUser.lastName}`}
        >
          <Avatar
            name={assignedUser.firstName}
            surname={assignedUser.lastName}
            avatarUrl={assignedUser.image}
            size="xs"
          />
        </div>
      ) : (
        <div className="tooltip" data-tip="Not assigned">
          <EmptyAvatar size="xs" />
        </div>
      )}
    </div>
  );
};
