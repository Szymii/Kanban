import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
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
        status: 200,
        message: "Authenticated",
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
        confirm: z.string().min(4).max(12),
      }),
    )
    .mutation(async ({ input, ctx }) => {
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

      const hashedPassword = await bcrypt.hash(password, 10);

      // Registration closed for security purposes
      throw new TRPCError({
        message: "Registration closed.",
        code: "FORBIDDEN",
      });

      const result = await ctx.prisma.user.create({
        data: { firstName, lastName, email, password: hashedPassword },
      });

      return {
        status: 201,
        message: "Account created successfully",
        result: result.email,
      };
    }),
});
