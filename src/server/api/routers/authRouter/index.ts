import { createTRPCRouter } from "src/server/api/trpc";

import { signUp } from "./signUp";

export const authRouter = createTRPCRouter({
  signUp,
});
