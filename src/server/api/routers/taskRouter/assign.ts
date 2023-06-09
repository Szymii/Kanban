import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const assign = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
      userId: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    if (input.userId === "EMPTY") {
      await ctx.prisma.task.update({
        where: {
          id: input.taskId,
        },
        data: {
          member: {
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
        member: {
          connect: {
            id: input.userId,
          },
        },
      },
    });

    return {
      status: 200,
      message: "Assignment changed",
    };
  });
