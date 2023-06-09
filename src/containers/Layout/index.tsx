import { signOut } from "next-auth/react";
import { type ReactNode } from "react";
import { Meta } from "src/modules/Meta";
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
      <Meta />
      <div>
        <TopPanel
          name={user.firstName}
          surname={user.lastName}
          avatarUrl={user.image}
          logoutFunction={() => void signOut()}
        />
        <main className="mx-auto flex min-h-[calc(100vh-104px)] max-w-[1580px] flex-col overflow-x-hidden px-4 pb-8">
          {children}
        </main>
      </div>
    </UserProvider>
  );
};
