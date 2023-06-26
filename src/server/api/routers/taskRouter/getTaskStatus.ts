import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const getTaskStatus = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
    }),
  )
  .query(async ({ input, ctx }) => {
    const task = await ctx.prisma.task.findFirst({
      where: {
        id: input.taskId,
      },
      include: {
        status: true,
      },
    });

    if (!task) {
      throw new TRPCError({
        message: "Task does not exists.",
        code: "NOT_FOUND",
      });
    }

    return task.status;
  });
