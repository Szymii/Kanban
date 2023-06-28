import {
  type Relation,
  RelationType,
  type Status,
  type Task,
} from "@prisma/client";
import { prisma } from "src/server/db";

interface IReturn {
  isValid: boolean;
  message: string | undefined;
}

export const useStatusGuard = async (
  task: Task & { relation: Relation[] },
  statusId: string,
): Promise<IReturn> => {
  const status = await prisma.status.findFirst({
    where: {
      id: statusId,
    },
  });

  if (!status) {
    return {
      isValid: false,
      message: "Status does not exists",
    };
  }

  if (task.relation.length === 0) {
    return {
      isValid: true,
      message: undefined,
    };
  }

  const isValid = await validateRelations(task, status);

  return {
    isValid: isValid,
    message: "",
  };
};

async function validateRelations(
  task: Task & { relation: Relation[] },
  status: Status,
): Promise<boolean> {
  for (const rel of task.relation) {
    const relatedTask = await prisma.task.findFirst({
      where: {
        id: rel.relatedTaskId,
        deleted: false,
      },
      include: { status: true },
    });

    if (status.final && rel.type === RelationType.BLOCKED_BY) {
      if (!relatedTask?.status?.final) {
        return false;
      }
    }

    if (!status.initial && rel.type === RelationType.DEPENDS_ON) {
      if (
        relatedTask?.status?.initial === undefined ||
        relatedTask.status.initial
      ) {
        return false;
      }
    }
  }

  return true;
}
