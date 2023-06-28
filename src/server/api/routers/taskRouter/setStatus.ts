import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { useStatusGuard } from "src/server/modules/task";
import { z } from "zod";

export const setStatus = protectedProcedure
  .input(
    z.object({
      taskId: z.string(),
      statusId: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    const task = await ctx.prisma.task.findFirst({
      where: {
        id: input.taskId,
        deleted: false,
      },
      include: {
        relation: true,
      },
    });

    if (!task) {
      return {
        status: 404,
        message: "Task does not exists",
      };
    }

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

    const { isValid, message } = await useStatusGuard(task, input.statusId);

    if (!isValid) {
      throw new TRPCError({
        message,
        code: "BAD_REQUEST",
      });
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
