import { RelationType } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const addRelation = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
      slug: z.string(),
      relation: z.nativeEnum(RelationType),
      relatedTaskNumber: z.number(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    const relatedTask = await ctx.prisma.task.findFirst({
      where: {
        number: input.relatedTaskNumber,
        board: {
          slug: input.slug,
        },
        deleted: false,
      },
    });

    if (!relatedTask || relatedTask.id === input.taskId) {
      throw new TRPCError({
        message: "Invalid task number.",
        code: "NOT_FOUND",
      });
    }

    await ctx.prisma.task.update({
      where: {
        id: input.taskId,
      },
      data: {
        relation: {
          create: {
            type: input.relation,
            relatedTaskId: relatedTask.id,
          },
        },
      },
    });

    return {
      status: 201,
      message: "Relation created successfully",
    };
  });
