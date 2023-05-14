import type { Status, User } from "@prisma/client";
import { UserSelect } from "src/components/UserSelect";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

import { TaskStatusSelect } from "./TaskStatusSelect";

interface IProps {
  members: User[];
  statuses: Status[];
  selectedStatusId: string | null;
  selectedUserId: string | null;
  taskId: string;
}

export const TaskActions = ({
  members,
  statuses,
  selectedStatusId,
  selectedUserId,
  taskId,
}: IProps) => {
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.task.assign.useMutation({
    async onSettled() {
      await utils.board.getEnhancedBoard.invalidate();
    },
  });
  const showNotification = useToastConsumer();

  return (
    <div className="flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center">
      <div className="w-full sm:max-w-[250px]">
        <UserSelect
          users={members}
          selectedUserId={selectedUserId ?? undefined}
          action={async (option) => {
            try {
              if (option?.value) {
                await mutateAsync({
                  userId: option.value,
                  taskId,
                });

                showNotification({
                  id: "user-assigned",
                  message: "User assigned",
                  type: "success",
                });
              }
            } catch (e) {
              const { message } = e as { message: string };
              showNotification({
                id: "failed-to-assign-user",
                message: message ?? "Failed to assign user",
                type: "error",
              });
            }
          }}
          disabled={isLoading}
        />
      </div>
      <div className="w-full sm:max-w-[250px]">
        <TaskStatusSelect
          statuses={statuses}
          selectedStatusId={selectedStatusId ?? undefined}
          onChange={() => {
            return;
          }}
          disabled={false}
        />
      </div>
    </div>
  );
};
