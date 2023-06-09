import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const setTitle = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
      newTitle: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    await ctx.prisma.task.update({
      where: {
        id: input.taskId,
      },
      data: {
        title: input.newTitle,
      },
    });

    return {
      status: 200,
      message: "Title changed",
    };
  });
