import { RelationType } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { relationGuardRelation } from "src/server/modules/relation";
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
    const task = await ctx.prisma.task.findFirst({
      where: {
        id: input.taskId,
        board: {
          slug: input.slug,
        },
        deleted: false,
      },
      include: {
        status: true,
      },
    });

    const relatedTask = await ctx.prisma.task.findFirst({
      where: {
        number: input.relatedTaskNumber,
        board: {
          slug: input.slug,
        },
        deleted: false,
      },
      include: {
        status: true,
      },
    });

    if (!relatedTask || !task || relatedTask.id === input.taskId) {
      throw new TRPCError({
        message: "Invalid task number.",
        code: "NOT_FOUND",
      });
    }

    const relations = await ctx.prisma.relation.findMany({
      where: {
        relatedTaskId: relatedTask.id,
        taskId: input.taskId,
      },
    });

    const { isRelationValid, relationMessage } = relationGuardRelation(
      relations,
      input.relation,
    );

    if (!isRelationValid) {
      throw new TRPCError({
        message: relationMessage,
        code: "BAD_REQUEST",
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
