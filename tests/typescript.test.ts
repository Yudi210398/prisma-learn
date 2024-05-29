import { PrismaClient } from "../node_modules/.prisma/client/index";

describe("halo", function () {
  it("prisma", async function () {
    const prisma = new PrismaClient({
      errorFormat: "pretty",
      log: ["info", "warn", "error", "query"],
    });
    await prisma.$connect();

    await prisma.$disconnect();
  });
});
