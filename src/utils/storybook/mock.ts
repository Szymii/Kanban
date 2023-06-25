import { createTRPCMsw } from "msw-trpc";
import { type AppRouter } from "src/server/api/root";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const trpcMsw = createTRPCMsw<AppRouter>();
