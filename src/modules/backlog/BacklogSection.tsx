import type { Task } from "@prisma/client";
import { Column } from "src/components/Column";
import { TaskCard } from "src/components/TaskCard";

interface IProps {
  tasks: Task[];
  boardSlug: string;
}

export const BacklogSection = ({ tasks, boardSlug }: IProps) => {
  const onBoardTasks = tasks.filter((task) => task.statusId);
  const backlogTasks = tasks.filter((task) => !task.statusId);

  return (
    <div className="mt-8 flex flex-col gap-2">
      <Column name={"On Board"}>
        {onBoardTasks.map((task) => (
          <TaskCard
            variant="inline"
            boardSlug={boardSlug}
            number={task.number}
            text={task.title}
            type={task.type}
            key={task.id}
            path={`/board/${boardSlug}/${task.number}`}
          />
        ))}
      </Column>
      <Column name={"Backlog"}>
        {backlogTasks.map((task) => (
          <TaskCard
            variant="inline"
            boardSlug={boardSlug}
            number={task.number}
            text={task.title}
            type={task.type}
            key={task.id}
            path={`/board/${boardSlug}/${task.number}`}
          />
        ))}
      </Column>
    </div>
  );
};
