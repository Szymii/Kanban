import { TaskType } from "@prisma/client";

interface IProps {
  type: TaskType | undefined;
  slug: string;
  number: string;
}

export const useTaskLinks = ({
  type = TaskType.TASK,
  slug,
  number,
}: IProps) => {
  const taskIcon = {
    STORY: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="mr-2 h-4 w-4 fill-green-500 stroke-current "
      >
        <rect x="10" y="10" width="80" height="80" rx="10" />
      </svg>
    ),
    BUG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="mr-2 h-4 w-4 fill-red-500 stroke-current"
      >
        <rect x="10" y="10" width="80" height="80" rx="10" />
      </svg>
    ),
    TASK: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="mr-2 h-4 w-4 fill-blue-500 stroke-current"
      >
        <rect x="10" y="10" width="80" height="80" rx="10" />
      </svg>
    ),
  };

  return [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="mr-2 h-4 w-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          ></path>
        </svg>
      ),
      name: slug,
      href: `/board/${slug}`,
    },
    {
      icon: taskIcon[type],
      name: `${slug}-${number}`,
    },
  ];
};
