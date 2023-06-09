import { Type } from "@prisma/client";
import { protectedProcedure } from "src/server/api/trpc";
import { getNextNumber } from "src/server/modules/task";
import { z } from "zod";

export const addTask = protectedProcedure
  .input(
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.nativeEnum(Type),
      statusId: z.string(),
      slug: z.string(),
    }),
  )
  .mutation(async ({ input, ctx }) => {
    const number = await getNextNumber({
      slug: input.slug,
    });

    const task = await ctx.prisma.task.create({
      data: {
        number,
        title: input.title,
        type: input.type,
        description: input.description,
        board: {
          connect: {
            slug: input.slug,
          },
        },
      },
    });

    if (input.statusId !== "") {
      await ctx.prisma.task.update({
        where: {
          id: task.id,
        },
        data: {
          status: {
            connect: {
              id: input.statusId,
            },
          },
        },
      });
    }

    return {
      status: 201,
      message: "Task created successfully",
    };
  });
