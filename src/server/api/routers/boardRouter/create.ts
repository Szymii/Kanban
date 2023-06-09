import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const create = protectedProcedure
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
  });
