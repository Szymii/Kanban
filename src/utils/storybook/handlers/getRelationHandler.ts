/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RelationType } from "@prisma/client";

import { trpcMsw } from "../mock";

export const getRelationHandler = () => {
  return trpcMsw.task.getRelations.query((req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        // @ts-ignore
        json: [
          {
            id: "777",
            type: RelationType.RELATED_TO,
            taskId: "123",
            relatedTaskId: "321",
            relatedTask: {
              id: "123",
              boardId: "555",
              title: "GG",
              number: 1,
              statusId: "888",
              userId: "17",
              type: "BUG",
              description: "Hi",
              deleted: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        ],
      }),
    );
  });
};
