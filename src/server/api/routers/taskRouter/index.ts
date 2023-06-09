import { createTRPCRouter } from "src/server/api/trpc";

import { addTask } from "./addTask";
import { assign } from "./assign";
import { deleteTask } from "./deleteTask";
import { getAvailableStatuses } from "./getAvailableStatuses";
import { getTask } from "./getTask";
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
});
