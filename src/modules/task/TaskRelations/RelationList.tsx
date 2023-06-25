import { type inferRouterOutputs } from "@trpc/server";
import Link from "next/link";
import { useRouter } from "next/router";
import { EmptyAvatar } from "src/components/Avatar";
import { TaskMeta } from "src/components/TaskCard/TaskMeta";
import { type AppRouter } from "src/server/api/root";

import { getOptionFromRelationType } from "./getOptionFromRelationType";

type RouterOutput = inferRouterOutputs<AppRouter>;

interface IProps {
  relations: RouterOutput["task"]["getRelations"];
}

export const RelationList = ({ relations }: IProps) => {
  const { query } = useRouter();
  const [getUrl] = useGetUrl();

  return (
    <div className="mt-4">
      {relations.map((relation) => {
        if (!("relatedTask" in relation)) {
          return null;
        }

        const taskRelationLabel = getOptionFromRelationType().find(
          (option) => option.value === relation.type,
        );

        return (
          <div className="mt-1 flex gap-4" key={""}>
            <div className="flex w-full rounded-md border">
              <div className="w-full min-w-[131px] max-w-[180px] basis-1/2 py-3 pl-4 text-sm font-semibold">
                {taskRelationLabel?.label}
              </div>
              <div className="divider divider-horizontal m-0" />
              <div className="flex w-full basis-full items-center justify-between px-4">
                <Link
                  href={getUrl(relation.relatedTask.number)}
                  className="flex items-center gap-4"
                >
                  <TaskMeta
                    number={relation.relatedTask.number}
                    type={relation.relatedTask.type}
                    boardSlug={
                      typeof query.board === "string" ? query.board : ""
                    }
                  />
                  <span className="hidden truncate hover:underline md:block md:max-w-[260px] lg:max-w-md">
                    {relation.relatedTask.title}
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
                  width="43"
                  height="55"
                  viewBox="0 0 43 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M3.24992 48.7917C3.24992 50.4051 3.89084 51.9524 5.03169 53.0932C6.17253 54.2341 7.71985 54.875 9.33325 54.875H33.6666C35.28 54.875 36.8273 54.2341 37.9681 53.0932C39.109 51.9524 39.7499 50.4051 39.7499 48.7917V12.2917H3.24992V48.7917ZM9.33325 18.375H33.6666V48.7917H9.33325V18.375ZM32.1458 3.16667L29.1041 0.125H13.8958L10.8541 3.16667H0.208252V9.25H42.7916V3.16667H32.1458Z"
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

const useGetUrl = () => {
  const { query } = useRouter();

  return [
    (taskNumber: number) =>
      `/board/${
        typeof query.board === "string" ? query.board : ""
      }/${taskNumber}`,
  ] as const;
};
