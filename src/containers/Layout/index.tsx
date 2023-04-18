import { signOut } from "next-auth/react";
import { type ReactNode } from "react";

import { TopPanel } from "./TopPanel";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopPanel
        name={"Szymon"}
        surname={"Melzer"}
        avatarUrl={undefined}
        logoutFunction={() => void signOut()}
      />
      <main>{children}</main>
    </div>
  );
};
