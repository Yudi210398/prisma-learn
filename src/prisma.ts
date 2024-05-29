import { PrismaClient } from "../node_modules/.prisma/client/index";

export const prismaClient = new PrismaClient({
  errorFormat: "pretty",
  log: ["info", "warn", "error", "query"],
});
