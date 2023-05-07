import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "src/components/FormFields";
import { Modal, ModalButton } from "src/components/Modal";
import { useToastConsumer } from "src/containers/Toasts";
import { api } from "src/utils/api";

interface IProps {
  slug: string;
}

interface IAddMemberData {
  userEmail: string;
}

export const AddMemberModal = ({ slug }: IProps) => {
  const methods = useForm<IAddMemberData>();
  const showNotification = useToastConsumer();
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.board.addMember.useMutation({
    async onSettled() {
      await utils.board.getEnhancedBoard.invalidate();
    },
  });

  const addMember = async (data: IAddMemberData) => {
    try {
      const result = await mutateAsync({ slug, email: data.userEmail });
      if (result.status === 201) {
        methods.reset();
        showNotification({
          id: "added-new-member",
          message: "Added new member",
          type: "success",
        });
      }
    } catch (e) {
      const { message } = e as { message: string };
      showNotification({
        id: "failed-to-add-member",
        message: message ?? "Failed to add member",
        type: "error",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal
        header="Invite member to your board"
        content={
          <form
            className="w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              type="email"
              label="E-mail address of the user you want to invite"
              name="userEmail"
              required
            />
          </form>
        }
        id="add-member-modal"
        modalBtn={
          <>
            <ModalButton
              modalId="add-member-modal"
              variant={"confirm"}
              action={methods.handleSubmit(addMember)}
              disabled={isLoading}
            >
              Invite
            </ModalButton>
            <ModalButton
              modalId="add-member-modal"
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
