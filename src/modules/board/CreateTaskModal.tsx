import type { Status, Type } from "@prisma/client";
import { FormProvider, useForm } from "react-hook-form";
import { Modal, ModalButton } from "src/components/Modal";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

import { CreateTaskForm } from "./CreateTaskForm";

interface IProps {
  statuses: Status[];
  slug: string;
}

interface ICreateTaskData {
  title: string;
  description: string;
  type: Type;
  statusId: string;
}

export const CreateTaskModal = ({ statuses, slug }: IProps) => {
  const methods = useForm<ICreateTaskData>();
  const showNotification = useToastConsumer();
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.task.addTask.useMutation({
    async onSettled() {
      await utils.board.getEnhancedBoard.invalidate();
    },
  });

  const addTask = async (data: ICreateTaskData) => {
    try {
      const result = await mutateAsync({ ...data, slug });
      if (result.status === 201) {
        // methods.reset();
        showNotification({
          id: "created-new-task",
          message: "Created new task",
          type: "success",
        });
      }
    } catch (e) {
      const { message } = e as { message: string };
      showNotification({
        id: "failed-to-create-task",
        message: message ?? "Failed to create task",
        type: "error",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal
        header="Create task"
        content={<CreateTaskForm statuses={statuses} />}
        id="create-task-modal"
        modalBtn={
          <>
            <ModalButton
              modalId="create-task-modal"
              variant={"confirm"}
              action={methods.handleSubmit(addTask)}
              disabled={isLoading}
            >
              Create
            </ModalButton>
            <ModalButton
              modalId="create-task-modal"
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
