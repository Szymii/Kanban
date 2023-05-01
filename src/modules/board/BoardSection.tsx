import type { Status, Task } from "@prisma/client";
import { Column } from "src/components/Column";
import { TaskCard } from "src/components/TaskCard";

interface IProps {
  statuses: Status[];
  tasks: Task[];
  boardSlug: string;
}

export const BoardSection = ({ statuses, tasks, boardSlug }: IProps) => {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {statuses.map((status) => {
        const tasksByColumn = tasks.filter(
          (task) => task.statusId === status.id,
        );
        return (
          <Column name={status.name} key={status.id}>
            {tasksByColumn.map((task) => (
              <TaskCard
                boardSlug={boardSlug}
                number={task.number}
                text={task.title}
                type={task.type}
                key={task.id}
              />
            ))}
          </Column>
        );
      })}
    </div>
  );
};
