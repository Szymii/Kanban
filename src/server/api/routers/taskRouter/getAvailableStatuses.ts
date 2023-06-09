import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const getAvailableStatuses = protectedProcedure
  .input(
    z.object({
      slug: z.string(),
      taskNumber: z.string(),
    }),
  )
  .query(async ({ input, ctx }) => {
    const board = await ctx.prisma.board.findFirst({
      where: {
        slug: input.slug,
      },
      include: {
        statuses: true,
      },
    });

    if (!board) {
      throw new TRPCError({
        message: "Board does not exists.",
        code: "NOT_FOUND",
      });
    }

    return board.statuses;
  });
