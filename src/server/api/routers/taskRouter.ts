import { Type } from "@prisma/client";
import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { getNextNumber } from "src/server/task";
import { z } from "zod";

export const taskRouter = createTRPCRouter({
  getTask: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
        taskNumber: z.string(),
      }),
    )
    .query(({ input, ctx }) => {
      const task = ctx.prisma.task.findFirst({
        where: {
          board: {
            slug: input.slug,
          },
          number: Number(input.taskNumber),
        },
      });

      return task;
    }),
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
    }),
  assign: protectedProcedure
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
    }),
});
