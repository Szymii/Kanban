import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const boardRouter = createTRPCRouter({
  getEnhancedBoard: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      const board = ctx.prisma.board.findFirst({
        where: {
          slug: input.slug,
        },
        include: {
          members: true,
          statuses: true,
          tasks: true,
        },
      });

      return board;
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
});
