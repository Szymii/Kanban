import { Children, type ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Menu = ({ children }: IProps) => {
  const arrayChildren = Children.toArray(children);

  return (
    <ul className="menu menu-horizontal h-12">
      <li>
        <a className="rounded-md bg-slate-200">
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
        </a>
        <ul className="z-10 w-auto  bg-base-100">
          <ul className="w-full bg-base-100 shadow-sm">
            {arrayChildren.map((child, i) => {
              return (
                <li className={`${i > 0 ? "border-t" : ""}`} key={i}>
                  {child}
                </li>
              );
            })}
          </ul>
        </ul>
      </li>
    </ul>
  );
};
