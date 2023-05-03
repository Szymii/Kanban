import Link from "next/link";
import { type ReactNode } from "react";

interface IProps {
  links: Array<{
    name: string;
    icon: ReactNode;
    href?: string;
  }>;
}

export const Breadcrumbs = ({ links }: IProps) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {links.map(({ name, icon, href }, i) => {
          return (
            <li key={i}>
              {href ? (
                <Link href={href}>
                  {icon}
                  {name}
                </Link>
              ) : (
                <>
                  {icon}
                  {name}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
