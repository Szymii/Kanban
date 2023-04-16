import { useSession } from "next-auth/react";
import { Layout } from "src/containers/Layout";

export default function Profile() {
  const { data: sessionData } = useSession();

  return (
    <>
      <Layout>
        <>Profile</>
      </Layout>
    </>
  );
}
