import { prismaClient } from "../src/prisma";

describe("pagging", () => {
  it("pagging  data", async () => {
    const page1 = await prismaClient.customer.findMany({
      skip: 3,
      take: 2,
      orderBy: [{ id: "asc" }],
    });
    console.log(page1, `kocak bet`);
  });
});
