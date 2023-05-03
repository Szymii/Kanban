import { Breadcrumbs } from "src/components/Breadcrumbs/Breadcrumbs";
import { Layout } from "src/containers/Layout";
import {
  TaskActions,
  TaskContent,
  TaskHeader,
  TaskTimestamps,
} from "src/modules/task";

export default function Task() {
  const links = useTaskLinks();

  return (
    <>
      <Layout>
        <Breadcrumbs links={links} />
        <TaskHeader taskTitle="Testowanko asda sdasd" />
        <TaskActions />
        <TaskContent />
        <div className="mt-auto">
          <TaskTimestamps createdAt="23.03.2030" updatedAt="23.03.2030" />
        </div>
      </Layout>
    </>
  );
}

const useTaskLinks = () => {
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
      name: "PZP",
      href: "/board/ADM",
    },
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
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
      name: "PZP-119",
    },
  ];
};
