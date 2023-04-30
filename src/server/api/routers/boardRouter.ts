import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const boardRouter = createTRPCRouter({
  getEnhancedBoard: protectedProcedure
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
        include: {
          members: true,
          statuses: true,
          tasks: true,
        },
      });

      return board;
    }),
});
