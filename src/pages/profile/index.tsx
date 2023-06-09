import { Error } from "src/components/Error";
import { Loading } from "src/components/Loading";
import { Layout } from "src/containers/Layout";
import {
  BoardSelectionSection,
  ProfileMeta,
  UserSection,
} from "src/modules/profile";
import { api } from "src/utils/api";

export default function Profile() {
  const { data: boards, isLoading } = api.board.getBoards.useQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!boards) {
    return (
      <Error
        text="Something goes wrong"
        action={() => location.reload()}
        actionLabel="Retry"
      />
    );
  }

  return (
    <>
      <ProfileMeta />
      <Layout>
        <div>
          <UserSection />
          <div className="divider" />
          <BoardSelectionSection boards={boards} />
        </div>
      </Layout>
    </>
  );
}
