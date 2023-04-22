import { signOut } from "next-auth/react";
import { type ReactNode } from "react";
import { UserProvider } from "src/modules/profile";
import { api } from "src/utils/api";

import { TopPanel } from "./TopPanel";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { data: user } = api.user.getUser.useQuery();

  if (!user) {
    return null;
  }

  return (
    <UserProvider userData={user}>
      <div>
        <TopPanel
          name={user.firstName}
          surname={user.lastName}
          avatarUrl={user.image}
          logoutFunction={() => void signOut()}
        />
        <main className="px-4 pb-8">{children}</main>
      </div>
    </UserProvider>
  );
};
