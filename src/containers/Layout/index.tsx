import { type ReactNode } from "react";

// import { TopPanel } from "./TopPanel";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <TopPanel name={} profileUrl={} surname={} avatarUrl={} /> */}
      <main>{children}</main>
    </div>
  );
};
