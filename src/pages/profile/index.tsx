import { Layout } from "src/containers/Layout";
import {
  BoardSelectionSection,
  ProfileMeta,
  UserSection,
} from "src/modules/profile";

export default function Profile() {
  return (
    <>
      <ProfileMeta />
      <Layout>
        <div>
          <UserSection />
          <hr className="my-12" />
          <BoardSelectionSection />
        </div>
      </Layout>
    </>
  );
}
