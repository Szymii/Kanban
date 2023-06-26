import { useRouter } from "next/router";
import { Breadcrumbs } from "src/components/Breadcrumbs/Breadcrumbs";
import { Error } from "src/components/Error";
import { Loading } from "src/components/Loading";
import { Layout } from "src/containers/Layout";
import {
  TaskActions,
  TaskContent,
  TaskHeader,
  TaskRelations,
  TaskTimestamps,
  useTaskLinks,
} from "src/modules/task";
import { api } from "src/utils/api";

interface IProps {
  slug: string;
  taskNumber: string;
}

const ConnectedTask = ({ slug, taskNumber }: IProps) => {
  const { data: board, isLoading: isBoardLoading } =
    api.board.getEnhancedBoard.useQuery({ slug });
  const { data: task, isLoading: isTaskLoading } = api.task.getTask.useQuery({
    slug,
    taskNumber,
  });
  const { data: availableStatuses, isLoading: areStatusesLoading } =
    api.task.getAvailableStatuses.useQuery({
      slug,
      taskNumber,
    });

  const links = useTaskLinks({ type: task?.type, slug, number: taskNumber });

  if (isBoardLoading || areStatusesLoading || isTaskLoading) {
    return <Loading />;
  }

  if (!task || !board || !availableStatuses) {
    return (
      <Error
        text="Something goes wrong"
        action={() => location.reload()}
        actionLabel="Retry"
      />
    );
  }

  return (
    <>
      <Layout>
        <Breadcrumbs links={links} />
        <TaskHeader taskTitle={task.title} taskId={task.id} />
        <TaskActions
          members={board.members}
          availableStatuses={availableStatuses}
          selectedStatusId={task.statusId}
          selectedUserId={task.userId}
          taskId={task.id}
        />
        <TaskContent taskDescription={task.description} taskId={task.id} />
        <TaskRelations taskId={task.id} members={board.members} />
        <div className="mt-auto">
          <TaskTimestamps
            createdAt={task.createdAt.toLocaleDateString()}
            updatedAt={task.updatedAt.toLocaleDateString()}
          />
        </div>
      </Layout>
    </>
  );
};

export default function Task() {
  const { query } = useRouter();
  const { board, task } = query;

  if (typeof board !== "string" || typeof task !== "string") {
    return null;
  }

  return <ConnectedTask slug={board} taskNumber={task} />;
}
