import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { excludeField } from "src/utils";

export const userRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
    });

    if (!user) {
      throw new TRPCError({
        message: "User not found.",
        code: "NOT_FOUND",
      });
    }

    return excludeField(user, ["password"]);
  }),

  withBoards: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      include: {
        boards: true,
      },
    });

    if (!user) {
      throw new TRPCError({
        message: "User not found.",
        code: "NOT_FOUND",
      });
    }

    return excludeField(user, ["password"]);
  }),
});
