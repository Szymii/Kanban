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
        <TaskHeader />
        <TaskActions />
        <TaskContent />
        <TaskTimestamps />
      </Layout>
    </>
  );
}

const useTaskLinks = () => {
  return [];
};
