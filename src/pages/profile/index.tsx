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
          <hr className="mt-16 mb-12" />
          <BoardSelectionSection boards={[{ slug: "PZP" }]} />
        </div>
      </Layout>
    </>
  );
}
