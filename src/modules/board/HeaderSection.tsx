import { type Status } from "@prisma/client";
import { useRouter } from "next/router";
import { type ComponentProps } from "react";
import { Avatar } from "src/components/Avatar";
import { AvatarGroup } from "src/components/AvatarGroup";
import { Menu } from "src/components/Menu";

import { AddMemberModal } from "./AddMemberModal";
import { CreateTaskModal } from "./CreateTaskModal";
import { RemoveBoardModal } from "./RemoveBoardModal";
import { ShowAddMemberModalBtn } from "./ShowAddMemberModalBtn";

interface User extends ComponentProps<typeof Avatar> {
  id: string;
}

interface IProps {
  statuses: Status[];
  users: User[];
  isOwner: boolean;
  boardSlug: string;
}

export const HeaderSection = ({
  statuses,
  users,
  isOwner,
  boardSlug,
}: IProps) => {
  const router = useRouter();
  const onBacklog = router.asPath.includes("backlog");

  return (
    <>
      <RemoveBoardModal slug={boardSlug} />
      <AddMemberModal slug={boardSlug} />
      <CreateTaskModal statuses={statuses} />
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <AvatarGroup>
            {users.map((user) => (
              <Avatar
                name={user.name}
                surname={user.surname}
                avatarUrl={user?.avatarUrl}
                key={user.id}
              />
            ))}
          </AvatarGroup>
          {isOwner && <ShowAddMemberModalBtn />}
        </div>
        <div className="flex items-center justify-center gap-4">
          <label className="btn-primary btn" htmlFor="create-task-modal">
            Create Task
          </label>
          <Menu>
            {isOwner && (
              <label htmlFor={"remove-board-modal"}>
                <a>Remove Board</a>
              </label>
            )}
            {onBacklog ? (
              <a
                onClick={() =>
                  router.push(`${router.asPath.replace("backlog", "")}`)
                }
              >
                Board
              </a>
            ) : (
              <a onClick={() => router.push(`${router.asPath}/backlog`)}>
                Backlog
              </a>
            )}
          </Menu>
        </div>
      </div>
    </>
  );
};
