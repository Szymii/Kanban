import type { User } from "@prisma/client";
import { Error } from "src/components/Error";
import { api } from "src/utils/api";

import { RelationForm } from "./RelationForm";
import { RelationList } from "./RelationList";

interface IProps {
  taskId: string;
  members: Omit<User, "password">[];
}

export const TaskRelations = ({ taskId, members }: IProps) => {
  const { data: relations, isLoading } = api.task.getRelations.useQuery({
    taskId,
  });

  if (isLoading) {
    return (
      <div className="mt-8 py-4">
        <h2 className="mb-4 font-semibold">Relations</h2>
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      </div>
    );
  }

  if (!relations) {
    return (
      <Error
        text="Something goes wrong"
        action={() => location.reload()}
        actionLabel="Retry"
      />
    );
  }

  return (
    <div className="mt-8 py-4">
      <h2 className="mb-4 font-semibold">Relations</h2>
      <RelationForm taskId={taskId} />
      <RelationList relations={relations} members={members} />
    </div>
  );
};
