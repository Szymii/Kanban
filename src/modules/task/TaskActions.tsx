import type { Status, User } from "@prisma/client";
import { UserSelect } from "src/components/UserSelect";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

import { TaskStatusSelect } from "./TaskStatusSelect";

interface IProps {
  members: Omit<User, "password">[];
  availableStatuses: Status[];
  selectedStatusId: string | null;
  selectedUserId: string | null;
  taskId: string;
}

export const TaskActions = ({
  members,
  availableStatuses,
  selectedStatusId,
  selectedUserId,
  taskId,
}: IProps) => {
  const utils = api.useContext();
  const { mutateAsync: mutateAssign, isLoading: isLoadingAssign } =
    api.task.assign.useMutation({
      async onSettled() {
        await utils.board.getEnhancedBoard.invalidate();
      },
    });
  const { mutateAsync: mutateState, isLoading: isLoadingStatus } =
    api.task.setStatus.useMutation({
      async onSettled() {
        await utils.board.getEnhancedBoard.invalidate();
        await utils.task.getAvailableStatuses.invalidate();
        await utils.task.getTaskStatus.invalidate();
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
                await mutateAssign({
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
              showNotification({
                id: "failed-to-assign-user",
                message: "Failed to assign user",
                type: "error",
              });
            }
          }}
          disabled={isLoadingAssign}
        />
      </div>
      <div className="w-full sm:max-w-[250px]">
        <TaskStatusSelect
          statuses={availableStatuses}
          selectedStatusId={selectedStatusId ?? undefined}
          onChange={async (option) => {
            try {
              if (option?.value) {
                await mutateState({
                  statusId: option.value,
                  taskId,
                });
                showNotification({
                  id: "status-changed",
                  message: "Status changed",
                  type: "success",
                });
              }
            } catch (e) {
              showNotification({
                id: "failed-to-change-task-status",
                message: "Failed to change task status",
                type: "error",
              });
            }
          }}
          disabled={isLoadingStatus}
        />
      </div>
    </div>
  );
};
