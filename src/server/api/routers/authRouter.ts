import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { z } from "zod";

export const authRouter = createTRPCRouter({
  signId: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(4).max(12),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { email, password } = input;

      const user = await ctx.prisma.user.findFirst({
        where: { email, password },
      });

      return {
        status: 201,
        message: "Account created successfully",
        result: user,
      };
    }),
  signUp: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        password: z.string().min(4).max(12),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { firstName, lastName, email, password } = input;

      const exists = await ctx.prisma.user.findFirst({
        where: { email },
      });

      if (exists) {
        throw new TRPCError({
          message: "User already exists.",
          code: "CONFLICT",
        });
      }

      const result = await ctx.prisma.user.create({
        data: { firstName, lastName, email, password: password },
      });

      return {
        status: 201,
        message: "Account created successfully",
        result: result.email,
      };
    }),
});
