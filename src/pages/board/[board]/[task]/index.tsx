import { useRouter } from "next/router";
import { Breadcrumbs } from "src/components/Breadcrumbs/Breadcrumbs";
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
  const { data: board } = api.board.getEnhancedBoard.useQuery({ slug });
  const { data: task } = api.task.getTask.useQuery({
    slug,
    taskNumber,
  });

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
  const taskType = task?.type!;

  const links = useTaskLinks({ type: taskType, slug, number: taskNumber });

  if (!task || !board) {
    return null;
  }

  return (
    <>
      <Layout>
        <Breadcrumbs links={links} />
        <TaskHeader taskTitle={task.title} />
        <TaskActions
          members={board.members}
          statuses={board.statuses}
          selectedStatusId={task.userId}
          selectedUserId={task.statusId}
        />
        <TaskContent />
        <TaskRelations />
        <div className="mt-auto">
          <TaskTimestamps createdAt="23.03.2030" updatedAt="23.03.2030" />
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
