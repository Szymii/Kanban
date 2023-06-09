import { createTRPCRouter } from "src/server/api/trpc";

import { addRelation } from "./addRelation";
import { addTask } from "./addTask";
import { assign } from "./assign";
import { deleteRelation } from "./deleteRelation";
import { deleteTask } from "./deleteTask";
import { getAvailableStatuses } from "./getAvailableStatuses";
import { getRelations } from "./getRelations";
import { getTask } from "./getTask";
import { getTaskStatus } from "./getTaskStatus";
import { setDescription } from "./setDescription";
import { setStatus } from "./setStatus";
import { setTitle } from "./setTitle";

export const taskRouter = createTRPCRouter({
  getTask,
  getAvailableStatuses,
  addTask,
  assign,
  setStatus,
  setTitle,
  setDescription,
  deleteTask,
  addRelation,
  getRelations,
  deleteRelation,
  getTaskStatus,
});
