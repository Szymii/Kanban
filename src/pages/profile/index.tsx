import { Layout } from "src/containers/Layout";
import {
  BoardSelectionSection,
  ProfileMeta,
  UserSection,
} from "src/modules/profile";
import { api } from "src/utils/api";

export default function Profile() {
  const { data: user } = api.user.withBoards.useQuery();

  if (!user) {
    return null;
  }

  return (
    <>
      <ProfileMeta />
      <Layout>
        <div>
          <UserSection />
          <hr className="mt-16 mb-12" />
          <BoardSelectionSection boards={user.boards} />
        </div>
      </Layout>
    </>
  );
}
