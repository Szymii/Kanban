import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const boardRouter = createTRPCRouter({
  getBoard: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      const board = ctx.prisma.board.findFirst({
        where: {
          slug: input.slug,
        },
      });

      return board;
    }),
});
