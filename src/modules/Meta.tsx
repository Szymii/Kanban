import Head from "next/head";
import { useRouter } from "next/router";

export const Meta = () => {
  const { query } = useRouter();
  const { board, task } = query;

  return (
    <Head>
      <title>
        Kanban {typeof board === "string" ? board : ""}
        {typeof task === "string" ? `-${task}` : ""}
      </title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/images/FavIcon.svg" />
    </Head>
  );
};
