import { useRouter } from "next/router";

export const useQueryParams = () => {
  const router = useRouter();
  const params = router.query;

  return params;
};
