import { type ReactNode } from "react";

interface IProps {
  id: string;
  header: ReactNode;
  content: ReactNode;
  modalBtn: ReactNode;
}

export const Modal = ({ id, header, content, modalBtn }: IProps) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{header}</h3>
          {content}
          <div className="modal-action">{modalBtn}</div>
        </div>
      </div>
    </>
  );
};
