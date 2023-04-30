import { Children, type ComponentProps, type ReactElement } from "react";

import { type Avatar } from "../Avatar";

interface IProps {
  children:
    | ReactElement<ComponentProps<typeof Avatar>>
    | Array<ReactElement<ComponentProps<typeof Avatar>>>;
}

export const AvatarGroup = ({ children }: IProps) => {
  const arrayChildren = Children.toArray(children);

  if (arrayChildren.length > 4) {
    return (
      <div className="avatar-group -space-x-4">
        {Children.map(arrayChildren.slice(0, 3), (child) => {
          return child;
        })}
        <div className="placeholder avatar">
          <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
            <span className="text-lg">{`+${arrayChildren.length - 3}`}</span>
          </div>
        </div>
      </div>
    );
  }

  return <div className="avatar-group -space-x-4">{children}</div>;
};
