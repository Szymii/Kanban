import { Children, type ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Menu = ({ children }: IProps) => {
  const arrayChildren = Children.toArray(children);

  return (
    <div className="dropdown-bottom dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn m-1 bg-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
      >
        {arrayChildren.map((child, i) => {
          return <li key={i}>{child}</li>;
        })}
      </ul>
    </div>
  );
};
