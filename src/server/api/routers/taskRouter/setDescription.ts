import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const setDescription = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
      newDescription: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    await ctx.prisma.task.update({
      where: {
        id: input.taskId,
      },
      data: {
        description: input.newDescription,
      },
    });

    return {
      status: 200,
      message: "Description changed",
    };
  });
