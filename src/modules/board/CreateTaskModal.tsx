import { FormProvider, useForm } from "react-hook-form";
import { Modal, ModalButton } from "src/components/Modal";
import { useToastConsumer } from "src/containers/Toasts";

// import { api } from "src/utils/api";
import { CreateTaskForm } from "./CreateTaskForm";

interface IProps {
  slug: string;
}

interface ICreateTaskData {
  userEmail: string;
}

export const CreateTaskModal = ({ slug }: IProps) => {
  const methods = useForm<ICreateTaskData>();
  const showNotification = useToastConsumer();
  // const utils = api.useContext();
  // const { mutateAsync, isLoading } = api.board.addMember.useMutation({
  //   async onSettled() {
  //     await utils.board.getEnhancedBoard.invalidate();
  //   },
  // });

  const addMember = (data: ICreateTaskData) => {
    try {
      // const result = await mutateAsync({ slug, email: data.userEmail });
      // if (result.status === 201) {
      //   methods.reset();
      //   showNotification({
      //     id: "",
      //     message: "",
      //     type: "success",
      //   });
      // }
    } catch (e) {
      const { message } = e as { message: string };
      showNotification({
        id: "",
        message: message ?? "",
        type: "error",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal
        header="Create task"
        content={<CreateTaskForm />}
        id="create-task-modal"
        modalBtn={
          <>
            <ModalButton
              modalId="create-task-modal"
              variant={"confirm"}
              action={methods.handleSubmit(addMember)}
              // disabled={isLoading}
            >
              Invite
            </ModalButton>
            <ModalButton
              modalId="create-task-modal"
              variant={"cancel"}
              action={() => {
                methods.reset();
              }}
              // disabled={isLoading}
            >
              Cancel
            </ModalButton>
          </>
        }
      />
    </FormProvider>
  );
};
