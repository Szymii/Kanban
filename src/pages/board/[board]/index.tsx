import { Layout } from "src/containers/Layout";
import { BoardSection, HeaderSection } from "src/modules/board";
import { useQueryParams } from "src/utils";
import { api } from "src/utils/api";

interface IProps {
  slug: string;
}

const ConnectedBoard = ({ slug }: IProps) => {
  const { data } = api.board.getEnhancedBoard.useQuery({
    slug: slug,
  });

  if (!data) {
    return null;
  }

  const { statuses, members, tasks } = data;

  return (
    <>
      <HeaderSection />
      <BoardSection />
    </>
  );
};

export default function Board() {
  const { board } = useQueryParams();

  if (typeof board !== "string") {
    return null;
  }

  return (
    <Layout>
      <ConnectedBoard slug={board} />
    </Layout>
  );
}
