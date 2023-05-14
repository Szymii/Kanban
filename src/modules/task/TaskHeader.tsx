import { EditableInput } from "src/components/Editable";
import { Menu } from "src/components/Menu";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

interface IProps {
  taskTitle: string;
  taskId: string;
}

export const TaskHeader = ({ taskTitle, taskId }: IProps) => {
  const showNotification = useToastConsumer();
  const utils = api.useContext();
  const { mutateAsync } = api.task.setTitle.useMutation({
    async onSettled() {
      await utils.board.getEnhancedBoard.invalidate();
      await utils.task.getTask.invalidate();
    },
  });

  return (
    <div className="flex items-center justify-between">
      <EditableInput
        defaultText={taskTitle}
        onSave={async (newTitle) => {
          try {
            await mutateAsync({ taskId, newTitle });
            showNotification({
              id: "title-changed",
              message: "Title changed",
              type: "success",
            });
          } catch (e) {
            showNotification({
              id: "failed-to-change-title",
              message: "Failed to change title",
              type: "error",
            });
          }
        }}
      />
      <Menu>
        <a>Transform</a>
        <a>Remove Task</a>
      </Menu>
    </div>
  );
};
