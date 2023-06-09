import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const addMember = protectedProcedure
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

    if (!user) {
      throw new TRPCError({
        message: "User does not exists.",
        code: "NOT_FOUND",
      });
    }

    const exist = user.boards.find((board) => board.slug === input.slug);

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
  });
