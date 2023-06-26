import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const deleteRelation = protectedProcedure
  .input(
    z.object({
      relationId: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    const relation = await ctx.prisma.relation.findFirst({
      where: {
        id: input.relationId,
      },
    });

    if (!relation) {
      throw new TRPCError({
        message: "Relation does not exist.",
        code: "NOT_FOUND",
      });
    }

    await ctx.prisma.relation.delete({
      where: {
        id: input.relationId,
      },
    });

    return {
      status: 201,
      message: "Relation deleted successfully",
    };
  });
