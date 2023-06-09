import { FormProvider, useForm } from "react-hook-form";
import { Modal, ModalButton } from "src/components/Modal";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

import { SlugTextField } from "./SlugTextField";

interface ICreateBoarData {
  slug: string;
}

export const CreateBoardModal = () => {
  const methods = useForm<ICreateBoarData>();
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.board.create.useMutation({
    async onSettled() {
      await utils.board.getBoards.invalidate();
    },
  });
  const showNotification = useToastConsumer();

  const onSubmit = async (data: ICreateBoarData) => {
    try {
      await mutateAsync(data);
      methods.reset();
      showNotification({
        id: "board-created-successfully",
        message: "Board created successfully",
        type: "success",
      });
    } catch (e) {
      const { message } = e as { message: string };
      showNotification({
        id: "board-creation-failed",
        message: message ?? "Board creation failed",
        type: "error",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal
        header="Create modal"
        content={
          <form
            className="w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <SlugTextField label="Board slug" name="slug" required />
          </form>
        }
        id="create-board-modal"
        modalBtn={
          <>
            <ModalButton
              modalId="create-board-modal"
              variant={"confirm"}
              action={methods.handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              Create
            </ModalButton>
            <ModalButton
              modalId="create-board-modal"
              variant={"cancel"}
              action={() => {
                methods.reset();
              }}
              disabled={isLoading}
            >
              Cancel
            </ModalButton>
          </>
        }
      />
    </FormProvider>
  );
};
