import type { User } from "@prisma/client";
import { Avatar, EmptyAvatar } from "src/components/Avatar";

interface IProps {
  userId: string | null;
  members: Omit<User, "password">[];
}

export const AssignedUserAvatar = ({ userId, members }: IProps) => {
  const assignedUser = members.find(({ id }) => id === userId);

  if (!assignedUser) {
    return (
      <div className="tooltip" data-tip="Not assigned">
        <EmptyAvatar size="xs" />
      </div>
    );
  }

  return (
    <>
      <div
        className="tooltip"
        data-tip={`${assignedUser.firstName} ${assignedUser.lastName}`}
      >
        <Avatar
          name={assignedUser.firstName}
          surname={assignedUser.lastName}
          avatarUrl={assignedUser.image}
          size="xs"
        />
      </div>
    </>
  );
};
