import { protectedProcedure } from "src/server/api/trpc";
import { invertRelationsType } from "src/server/modules/task";
import { z } from "zod";

export const getRelations = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
    }),
  )
  .query(async ({ input, ctx }) => {
    const relationsTo = await ctx.prisma.relation.findMany({
      where: {
        taskId: input.taskId,
      },
      include: {
        relatedTask: true,
      },
    });

    const relyOn = await ctx.prisma.relation.findMany({
      where: {
        relatedTaskId: input.taskId,
      },
      include: {
        task: true,
      },
    });

    const invertedRelations = invertRelationsType(relyOn);

    return [...relationsTo, ...invertedRelations];
  });
