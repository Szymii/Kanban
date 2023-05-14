import { useRouter } from "next/router";
import { Modal, ModalButton } from "src/components/Modal";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

interface IProps {
  slug: string;
}

export const RemoveBoardModal = ({ slug }: IProps) => {
  const showNotification = useToastConsumer();
  const router = useRouter();
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.board.delete.useMutation({
    async onSettled() {
      await utils.user.withBoards.invalidate();
    },
  });

  const remove = async () => {
    try {
      await mutateAsync({ slug });
      showNotification({
        id: "board-deleted-successfully",
        message: "Board deleted successfully",
        type: "success",
      });

      await router.push("/profile");
    } catch (e) {
      const { message } = e as { message: string };
      showNotification({
        id: "board-deletion-failed",
        message: message ?? "Board deletion failed",
        type: "error",
      });
    }
  };

  return (
    <Modal
      header="Do you want remove this board?"
      content={"This action can not be revert. Are you sure?"}
      id="remove-board-modal"
      modalBtn={
        <>
          <ModalButton
            modalId="remove-board-modal"
            variant={"confirm"}
            action={remove}
            disabled={isLoading}
          >
            Confirm
          </ModalButton>
          <ModalButton
            modalId="remove-board-modal"
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
