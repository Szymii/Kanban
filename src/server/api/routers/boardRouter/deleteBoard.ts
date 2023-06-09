import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const deleteBoard = protectedProcedure
  .input(
    z.object({
      slug: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    const exists = await ctx.prisma.board.findFirst({
      where: { slug: input.slug },
    });

    if (!exists) {
      throw new TRPCError({
        message: "Board don't exists.",
        code: "NOT_FOUND",
      });
    }

    await ctx.prisma.board.update({
      where: {
        slug: input.slug,
      },
      data: {
        statuses: {
          deleteMany: {},
        },
        tasks: {
          deleteMany: {},
        },
      },
    });

    await ctx.prisma.board.delete({
      where: {
        slug: input.slug,
      },
    });

    return {
      status: 201,
      message: "Board deleted successfully",
    };
  });
