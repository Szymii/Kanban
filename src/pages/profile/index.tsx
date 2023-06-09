import { Layout } from "src/containers/Layout";
import {
  BoardSelectionSection,
  ProfileMeta,
  UserSection,
} from "src/modules/profile";
import { api } from "src/utils/api";

export default function Profile() {
  const { data: boards } = api.board.getBoards.useQuery();

  if (!boards) {
    return null;
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
