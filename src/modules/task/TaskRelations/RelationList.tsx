import Link from "next/link";
import { Avatar, EmptyAvatar } from "src/components/Avatar";
import { TaskMeta } from "src/components/TaskCard/TaskMeta";

interface IProps {
  relations: [];
}

export const RelationList = ({ relations }: IProps) => {
  return (
    <div className="mt-4">
      {relations.map((relation) => {
        return (
          <div className="flex gap-4" key={""}>
            <div className="flex w-full rounded-md border">
              <div className="w-full min-w-[131px] max-w-[180px] basis-1/2 py-3 pl-4 text-sm font-semibold">
                {"Blocked By"}
              </div>
              <div className="divider divider-horizontal m-0" />
              <div className="flex w-full basis-full items-center justify-between px-4">
                <Link href={"/board/TST/1"} className="flex items-center gap-4">
                  <TaskMeta number={111} type={"BUG"} boardSlug={"ASD"} />
                  <span className="hidden truncate hover:underline md:block md:max-w-[260px] lg:max-w-md">
                    {"text text texttexttexttext text texttext text"}
                  </span>
                </Link>
                {/* {assignedUser ? (
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
                ) : ( */}
                <div className="tooltip" data-tip="Not assigned">
                  <EmptyAvatar size="xs" />
                </div>
                {/* )} */}
              </div>
            </div>
            <div className="tooltip" data-tip="Disconnect">
              <button className="btn-primary btn-active btn min-w-[65px]">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M32.1001 11.2502C33.3001 12.4502 33.3001 14.4002 32.1001 15.4502L27.9001 19.6502L16.2001 7.9502L20.4001 3.7502C21.6001 2.5502 23.5501 2.5502 24.6001 3.7502L27.3001 6.4502L31.8001 1.9502L33.9001 4.0502L29.4001 8.55019L32.1001 11.2502ZM23.4001 19.9502L21.3001 17.8502L17.1001 22.0502L13.9501 18.9002L18.1501 14.7002L16.0501 12.6002L11.8501 16.8002L9.6001 14.7002L5.4001 18.9002C4.2001 20.1002 4.2001 22.0502 5.4001 23.1002L8.1001 25.8002L2.1001 31.8002L4.2001 33.9002L10.2001 27.9002L12.9001 30.6002C14.1001 31.8002 16.0501 31.8002 17.1001 30.6002L21.3001 26.4002L19.2001 24.3002L23.4001 19.9502Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
