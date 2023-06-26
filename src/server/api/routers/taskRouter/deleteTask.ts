import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const deleteTask = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    await ctx.prisma.task.delete({
      where: {
        id: input.taskId,
      },
      include: {
        relation: true,
      },
    });

    return {
      status: 200,
      message: "Removed successfully",
    };
  });
