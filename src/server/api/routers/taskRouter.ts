import { Type } from "@prisma/client";
import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const taskRouter = createTRPCRouter({
  addTask: protectedProcedure
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
      const task = await ctx.prisma.task.create({
        data: {
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
    }),
});
