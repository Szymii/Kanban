import { type ReactNode } from "react";
import { Logo } from "src/components/Logo";
import { PublicMeta } from "src/modules/publicModules";

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PublicMeta />
      <div className="mb-6 flex h-20 items-center justify-between pl-4 shadow-sm">
        <Logo href="/" />P
      </div>
      <main className="-mt-2 pb-16 lg:pt-24">{children}</main>
    </div>
  );
};
