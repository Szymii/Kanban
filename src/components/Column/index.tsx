import { Children, type ReactNode } from "react";

interface IProps {
  name: string;
  children?: ReactNode;
  action?: () => void;
}

export const Column = ({ children, name, action }: IProps) => {
  const childrenCount = Children.count(children);

  return (
    <div className="flex flex-col rounded-md bg-slate-200 p-2">
      <div className="flex justify-between">
        <h2 className="p-2 font-bold">
          {name} {childrenCount}
        </h2>
        {action && (
          <div className="btn-ghost btn-sm btn" onClick={action}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.84 2.72998C16.45 2.72998 16.07 2.87998 15.77 3.16998L13.65 5.28998L18.95 10.6L21.07 8.49998C21.67 7.88998 21.67 6.93998 21.07 6.35998L17.9 3.16998C17.6 2.87998 17.22 2.72998 16.84 2.72998ZM12.94 5.99998L4.84 14.11L7.4 14.39L7.58 16.68L9.86 16.85L10.15 19.41L18.25 11.3M4.25 15.04L2.5 21.73L9.2 19.94L8.96 17.78L6.65 17.61L6.47 15.29"
                fill="black"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 pb-2">{children}</div>
    </div>
  );
};
