import { Layout } from "src/containers/Layout";
import { BacklogSection } from "src/modules/backlog";
import { HeaderSection } from "src/modules/board";
import { useUserConsumer } from "src/modules/profile";
import { useQueryParams } from "src/utils";
import { api } from "src/utils/api";

interface IProps {
  slug: string;
}

const ConnectedBacklog = ({ slug }: IProps) => {
  const { id: userId } = useUserConsumer();
  const { data: board } = api.board.getEnhancedBoard.useQuery({
    slug: slug,
  });

  if (!board) {
    return null;
  }

  const { members, tasks } = board;

  return (
    <>
      <HeaderSection
        isOwner={board.ownerId === userId}
        users={members.map((member) => ({
          ...member,
          name: member.firstName,
          surname: member.lastName,
        }))}
        boardSlug={slug}
      />
      <BacklogSection tasks={tasks} boardSlug={board.slug} />
    </>
  );
};

export default function Backlog() {
  const { board } = useQueryParams();

  if (typeof board !== "string") {
    return null;
  }
  return (
    <Layout>
      <ConnectedBacklog slug={board} />
    </Layout>
  );
}
