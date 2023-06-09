import { prisma } from "src/server/db";

interface IProps {
  slug: string;
}

export const getNextNumber = async ({ slug }: IProps) => {
  const board = await prisma.board.findFirst({
    where: {
      slug,
    },
    include: {
      tasks: true,
    },
  });

  if (!board?.tasks) {
    return 1;
  }

  const max = board.tasks.reduce((acc, task) => Math.max(acc, task.number), 0);

  return max + 1;
};
