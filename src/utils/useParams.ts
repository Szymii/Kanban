import { useRouter } from "next/router";

export const useParams = <T>() => {
  const { query } = useRouter();

  return query as T;
};
