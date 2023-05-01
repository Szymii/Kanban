import { useRouter } from "next/router";
import { type ComponentProps } from "react";
import { Avatar } from "src/components/Avatar";
import { AvatarGroup } from "src/components/AvatarGroup";
import { Menu } from "src/components/Menu";

interface User extends ComponentProps<typeof Avatar> {
  id: string;
}

interface IProps {
  users: User[];
  isOwner: boolean;
}

export const HeaderSection = ({ users, isOwner }: IProps) => {
  const router = useRouter();
  const onBacklog = router.asPath.includes("backlog");

  return (
    <div className="flex w-full justify-between">
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
      <div className="flex items-center justify-center gap-4">
        <button className="btn-primary btn ">Create Task</button>
        <Menu>
          {isOwner && <a>Remove Board</a>}
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
  );
};
