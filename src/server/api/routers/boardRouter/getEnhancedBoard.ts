import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "src/server/api/trpc";
import { excludeField } from "src/utils";
import { z } from "zod";

export const getEnhancedBoard = protectedProcedure
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
          member: task.member ? excludeField(task.member, ["password"]) : null,
        })),
      ],
    };
  });
