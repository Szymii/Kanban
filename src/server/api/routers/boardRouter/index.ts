import { createTRPCRouter } from "src/server/api/trpc";

import { addMember } from "./addMember";
import { create } from "./create";
import { deleteBoard } from "./deleteBoard";
import { getBoards } from "./getBoards";
import { getEnhancedBoard } from "./getEnhancedBoard";

export const boardRouter = createTRPCRouter({
  getEnhancedBoard,
  addMember,
  create,
  deleteBoard,
  getBoards,
});
