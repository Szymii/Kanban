import { Layout } from "src/containers/Layout";
import { BoardSection, HeaderSection } from "src/modules/board";
import { useUserConsumer } from "src/modules/profile";
import { useQueryParams } from "src/utils";
import { api } from "src/utils/api";

interface IProps {
  slug: string;
}

const ConnectedBoard = ({ slug }: IProps) => {
  const { id: userId } = useUserConsumer();
  const { data: board } = api.board.getEnhancedBoard.useQuery({
    slug: slug,
  });

  if (!board) {
    return null;
  }

  const { statuses, members, tasks } = board;

  return (
    <>
      <HeaderSection
        isOwner={board.ownerId === userId}
        users={members.map((member) => ({
          ...member,
          name: member.firstName,
          surname: member.lastName,
        }))}
      />
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
