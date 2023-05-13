import { authRouter } from "./routers/authRouter";
import { boardRouter } from "./routers/boardRouter";
import { taskRouter } from "./routers/taskRouter";
import { userRouter } from "./routers/userRouter";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  auth: authRouter,
  board: boardRouter,
  task: taskRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
