import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { excludeField } from "src/utils";
import { z } from "zod";

export const boardRouter = createTRPCRouter({
  getEnhancedBoard: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const board = await ctx.prisma.board.findFirst({
        where: {
          slug: input.slug,
        },
        include: {
          members: true,
          statuses: true,
          tasks: {
            include: {
              member: true,
            },
          },
        },
      });

      if (!board) {
        throw new TRPCError({
          message: "Board not found.",
          code: "NOT_FOUND",
        });
      }

      return {
        ...board,
        members: board.members.map((member) =>
          excludeField(member, ["password"]),
        ),
        tasks: [
          ...board.tasks.map((task) => ({
            ...task,
            member: task.member
              ? excludeField(task.member, ["password"])
              : null,
          })),
        ],
      };
    }),
  addMember: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
        email: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findFirst({
        where: { email: input.email },
        include: {
          boards: true,
        },
      });

      const exist = user?.boards.find((board) => board.slug === input.slug);

      if (exist) {
        throw new TRPCError({
          message: "Member already exists.",
          code: "CONFLICT",
        });
      }

      await ctx.prisma.board.update({
        where: {
          slug: input.slug,
        },
        data: {
          members: {
            connect: {
              email: input.email,
            },
          },
        },
      });

      return {
        status: 201,
        message: "Member added successfully",
      };
    }),
  create: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const exists = await ctx.prisma.board.findFirst({
        where: { slug: input.slug },
      });

      if (exists) {
        throw new TRPCError({
          message: "Board already exists.",
          code: "CONFLICT",
        });
      }

      const result = await ctx.prisma.board.create({
        data: {
          ownerId: ctx.session.user.id,
          slug: input.slug,
          statuses: {
            createMany: {
              data: [
                {
                  name: "To Do",
                },
                {
                  name: "In Progress",
                },
                {
                  name: "Done",
                },
              ],
            },
          },
          members: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      return {
        status: 201,
        message: "Board created successfully",
        result: result,
      };
    }),
  delete: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const exists = await ctx.prisma.board.findFirst({
        where: { slug: input.slug },
      });

      if (!exists) {
        throw new TRPCError({
          message: "Board don't exists.",
          code: "NOT_FOUND",
        });
      }

      await ctx.prisma.board.update({
        where: {
          slug: input.slug,
        },
        data: {
          statuses: {
            deleteMany: {},
          },
          tasks: {
            deleteMany: {},
          },
        },
      });

      await ctx.prisma.board.delete({
        where: {
          slug: input.slug,
        },
      });

      return {
        status: 201,
        message: "Board deleted successfully",
      };
    }),
});
