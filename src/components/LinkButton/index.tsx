import Link from "next/link";
import { type ReactNode } from "react";

interface IProps {
  direction: string;
  children: ReactNode;
}

export const LinkButton = ({ direction, children }: IProps) => {
  return (
    <Link href={direction} className="link-accent link">
      {children}
    </Link>
  );
};
