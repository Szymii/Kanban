import type { TaskType } from "@prisma/client";

interface IProps {
  number: number;
  type: TaskType;
  boardSlug: string;
}

export const TaskMeta = ({ number, type, boardSlug }: IProps) => {
  const bgc = {
    STORY: "bg-green-500",
    BUG: "bg-red-500",
    TASK: "bg-blue-500",
  };

  return (
    <div className="flex flex-col">
      <div className={`${bgc[type]} h-1 w-full rounded-sm`} />
      <div className="font-semibold">
        {boardSlug.toUpperCase()}-{number}
      </div>
    </div>
  );
};
