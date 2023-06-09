import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const setStatus = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
      statusId: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    if (input.statusId === "EMPTY") {
      await ctx.prisma.task.update({
        where: {
          id: input.taskId,
        },
        data: {
          status: {
            disconnect: true,
          },
        },
      });

      return {
        status: 200,
        message: "Assignment changed",
      };
    }

    await ctx.prisma.task.update({
      where: {
        id: input.taskId,
      },
      data: {
        status: {
          connect: {
            id: input.statusId,
          },
        },
      },
    });

    return {
      status: 200,
      message: "Assignment changed",
    };
  });
