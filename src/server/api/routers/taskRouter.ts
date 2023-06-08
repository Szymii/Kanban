import { Type } from "@prisma/client";
import { TRPCError } from "@trpc/server";
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
    .query(async ({ input, ctx }) => {
      const task = await ctx.prisma.task.findFirst({
        where: {
          board: {
            slug: input.slug,
          },
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
    }),
  getAvailableStatuses: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
        taskNumber: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const board = await ctx.prisma.board.findFirst({
        where: {
          slug: input.slug,
        },
        include: {
          statuses: true,
        },
      });

      if (!board) {
        throw new TRPCError({
          message: "Board does not exists.",
          code: "NOT_FOUND",
        });
      }

      return board.statuses;
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
  setStatus: protectedProcedure
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
    }),
  setTitle: protectedProcedure
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
    }),
  setDescription: protectedProcedure
    .input(
      z.object({
        taskId: z.string(),
        newDescription: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.task.update({
        where: {
          id: input.taskId,
        },
        data: {
          description: input.newDescription,
        },
      });

      return {
        status: 200,
        message: "Description changed",
      };
    }),
});
