import { PublicLayout } from "src/containers/PublicLayout";
import { PublicMeta } from "src/modules/publicModules";

export default function Home() {
  return (
    <>
      <PublicMeta />
      <PublicLayout>{"Hello"}</PublicLayout>
    </>
  );
}
