import { Modal, ModalButton } from "src/components/Modal";

export const CreateBoardModal = () => {
  return (
    <Modal
      header="Create modal"
      content={<CreateBoardForm />}
      id="create-board-modal"
      modalBtn={
        <>
          <ModalButton modalId="" variant={"confirm"}>
            Create
          </ModalButton>
          <ModalButton modalId="create-board-modal" variant={"cancel"}>
            Cancel
          </ModalButton>
        </>
      }
    />
  );
};

const CreateBoardForm = () => {
  return <></>;
};
