import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const getTask = protectedProcedure
  .input(
    z.object({
      slug: z.string(),
      taskNumber: z.string(),
    }),
  )
  .query(async ({ input, ctx }) => {
    const task = await ctx.prisma.task.findFirst({
      where: {
        board: {
          slug: input.slug,
        },
        deleted: false,
        number: Number(input.taskNumber),
      },
    });

    if (!task) {
      throw new TRPCError({
        message: "Task does not exists.",
        code: "NOT_FOUND",
      });
    }

    return task;
  });
