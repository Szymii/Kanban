import type { Status, Task } from "@prisma/client";

interface IProps {
  statuses: Status[];
  tasks: Task[];
}

export const BoardSection = ({ statuses, tasks }: IProps) => {
  console.log({ statuses, tasks });
  return <div className="mt-8">BoardSection</div>;
};
