import { type ReactNode, createContext, useContext } from "react";

import { type IUserData } from "./IUserData";

interface IProps {
  children: ReactNode;
  userData: IUserData;
}

const UserContext = createContext<IUserData | undefined>(undefined);

export const UserProvider = ({ children, userData }: IProps) => {
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUserConsumer = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserConsumer must be used within a UserContext");
  }

  return context;
};

export const withUser = (user?: Partial<IUserData>) => {
  const fixture = {
    email: "admin@example.com",
    firstName: "Admin",
    lastName: "admin",
    password: "admin",
    image: null,
    ...user,
  } as IUserData;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line react/display-name
  return (Story) => (
    <UserContext.Provider value={fixture}>
      <Story />
    </UserContext.Provider>
  );
};
