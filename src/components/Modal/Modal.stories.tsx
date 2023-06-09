import { type StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { ModalButton } from "./ModalButton";

export default {
  component: Modal,
};

const ID = "my-modal";

export const Default: StoryObj<typeof Modal> = {
  render: () => (
    <>
      <label htmlFor={ID} className="btn-neutral btn">
        open modal
      </label>
      <Modal
        id={ID}
        header="Congratulations random Internet user!"
        content={
          <>
            <p className="py-4">
              You ve been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </>
        }
        modalBtn={
          <>
            <ModalButton modalId={ID} variant="confirm">
              Yeah
            </ModalButton>
            <ModalButton modalId={ID} variant="cancel">
              Nope
            </ModalButton>
          </>
        }
      />
    </>
  ),
};
