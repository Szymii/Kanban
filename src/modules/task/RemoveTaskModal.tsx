import { useRouter } from "next/router";
import { Modal, ModalButton } from "src/components/Modal";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

interface IProps {
  taskId: string;
}

export const RemoveTaskModal = ({ taskId }: IProps) => {
  const showNotification = useToastConsumer();
  const router = useRouter();
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.task.deleteTask.useMutation({
    async onSettled() {
      await utils.board.getEnhancedBoard.invalidate();
    },
  });

  const remove = async () => {
    try {
      await mutateAsync({ taskId });
      showNotification({
        id: "task-deleted-successfully",
        message: "Task deleted successfully",
        type: "success",
      });

      // eslint-disable-next-line
      await router.push(`/board/${router.query.board}`);
    } catch (e) {
      const { message } = e as { message: string };
      showNotification({
        id: "task-deletion-failed",
        message: message ?? "Task deletion failed",
        type: "error",
      });
    }
  };

  return (
    <Modal
      header="Do you want remove this task?"
      content={"This action can not be revert. Are you sure?"}
      id="remove-task-modal"
      modalBtn={
        <>
          <ModalButton
            modalId="remove-task-modal"
            variant={"confirm"}
            action={remove}
            disabled={isLoading}
          >
            Confirm
          </ModalButton>
          <ModalButton
            modalId="remove-task-modal"
            variant={"cancel"}
            disabled={isLoading}
          >
            Cancel
          </ModalButton>
        </>
      }
    />
  );
};
