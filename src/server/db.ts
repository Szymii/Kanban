import { PrismaClient } from "@prisma/client";
import { env } from "src/env.mjs";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

prisma.$use(async (params, next) => {
  // Check incoming query type
  if (params.model == "Task") {
    if (params.action == "delete") {
      // Delete queries
      // Change action to an update
      params.action = "update";
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      params.args["data"] = { deleted: true };
    }
    if (params.action == "deleteMany") {
      // Delete many queries
      params.action = "updateMany";
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (params.args.data != undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        params.args.data["deleted"] = true;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        params.args["data"] = { deleted: true };
      }
    }
  }
  return next(params);
});

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
