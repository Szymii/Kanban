import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUser: protectedProcedure.query(({ ctx }) => {
    const user = ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
    });

    return user;
  }),

  withBoards: protectedProcedure.query(({ ctx }) => {
    const user = ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      include: {
        boards: true,
      },
    });

    return user;
  }),
});
