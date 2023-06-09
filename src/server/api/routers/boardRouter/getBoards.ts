import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";

export const getBoards = protectedProcedure.query(async ({ ctx }) => {
  const boards = await ctx.prisma.board.findMany({
    where: {
      members: {
        some: {
          id: ctx.session.user.id,
        },
      },
    },
  });

  if (!boards) {
    throw new TRPCError({
      message: "No boards found.",
      code: "NOT_FOUND",
    });
  }

  return boards;
});
