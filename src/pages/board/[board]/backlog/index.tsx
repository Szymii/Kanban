import { Error } from "src/components/Error";
import { Loading } from "src/components/Loading";
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
  const { data: board, isLoading } = api.board.getEnhancedBoard.useQuery({
    slug: slug,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!board) {
    return (
      <Error
        text="Something goes wrong"
        action={() => location.reload()}
        actionLabel="Retry"
      />
    );
  }

  const { members, tasks, statuses } = board;

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
        statuses={statuses}
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
