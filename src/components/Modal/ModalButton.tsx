import { type ReactNode } from "react";

interface IProps {
  modalId: string;
  variant: "confirm" | "cancel";
  children: ReactNode;
  disabled?: boolean;
  action?: () => void;
}

export const ModalButton = ({
  modalId,
  variant,
  action,
  disabled,
  children,
}: IProps) => {
  const classes = {
    confirm: "btn-primary",
    cancel: "btn-ghost btn-active",
  };

  return (
    <label
      htmlFor={modalId}
      onClick={action}
      className={`${classes[variant]} ${disabled ? "btn-disabled" : ""} btn`}
    >
      {children}
    </label>
  );
};
