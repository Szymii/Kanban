import { EditableTextArea } from "src/components/Editable";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

interface IProps {
  taskId: string;
  taskDescription: string | null;
}

export const TaskContent = ({ taskDescription, taskId }: IProps) => {
  const showNotification = useToastConsumer();
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.task.setDescription.useMutation({
    async onSettled() {
      await utils.board.getEnhancedBoard.invalidate();
      await utils.task.getTask.invalidate();
    },
  });

  return (
    <div className="mt-4 flex flex-col gap-4">
      <h2 className="font-semibold">Description</h2>
      <EditableTextArea
        defaultText={taskDescription}
        action={async (newDescription) => {
          try {
            await mutateAsync({ taskId, newDescription });
            showNotification({
              id: "description-changed",
              message: "Description changed",
              type: "success",
            });
          } catch (e) {
            showNotification({
              id: "failed-to-change-description",
              message: "Failed to change description",
              type: "error",
            });
          }
        }}
        isDisabled={isLoading}
      />
    </div>
  );
};
