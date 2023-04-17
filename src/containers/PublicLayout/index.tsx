import { type ReactNode } from "react";
import { Logo } from "src/components/Logo";

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="mb-6 flex h-20 items-center justify-between pl-4 shadow-sm">
        <Logo href="/" />
      </div>
      <main className="pb-16">{children}</main>
    </div>
  );
};