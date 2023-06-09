import { useRouter } from "next/router";
import { Error } from "src/components/Error";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Error
        text="Page not Found"
        action={() => router.replace("/")}
        actionLabel="Go Back"
      />
    </>
  );
}
