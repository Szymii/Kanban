import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  getUser: protectedProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
