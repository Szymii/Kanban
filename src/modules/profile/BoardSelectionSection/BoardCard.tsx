import { type ReactNode } from "react";

interface IProps {
  content: ReactNode;
  action: () => void;
}

export const BoardCard = ({ content, action }: IProps) => {
  return (
    <div
      onClick={action}
      className="card w-full cursor-pointer bg-base-100 shadow-xl hover:ring md:max-w-sm"
    >
      <div className="card-body">
        <div className="placeholder avatar flex items-center justify-center">
          <div className="w-24 rounded-full bg-primary text-neutral-content">
            <span className="text-3xl">{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
