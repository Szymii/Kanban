import type { Status, User } from "@prisma/client";
import { UserSelect } from "src/components/UserSelect";

import { TaskStatusSelect } from "./TaskStatusSelect";

interface IProps {
  members: User[];
  statuses: Status[];
  selectedStatusId: string | null;
  selectedUserId: string | null;
}

export const TaskActions = ({
  members,
  statuses,
  selectedStatusId,
  selectedUserId,
}: IProps) => {
  return (
    <div className="flex items-center justify-between  py-4">
      <div className="min-w-[250px]">
        <UserSelect
          users={members}
          selectedUserId={selectedStatusId ?? undefined}
          action={() => {
            return;
          }}
        />
      </div>
      <div className="min-w-[250px]">
        <TaskStatusSelect
          statuses={statuses}
          selectedStatusId={selectedUserId ?? undefined}
          onChange={() => {
            return;
          }}
          disabled={false}
        />
      </div>
    </div>
  );
};
