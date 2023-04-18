import { Logo } from "src/components/Logo";

import { UserProfileCard } from "./UserProfileCard";

interface IProps {
  name: string;
  surname: string;
  avatarUrl?: string;
  logoutFunction: () => void;
}

export const TopPanel = (props: IProps) => {
  return (
    <div className="mb-6 flex h-20 items-center justify-between pl-4 shadow-sm">
      <Logo href="/" />
      <UserProfileCard {...props} />
    </div>
  );
};
