import { prismaClient } from "../src/prisma";

describe("count", () => {
  it("count hitung", async () => {
    const totalData = await prismaClient.customer.count({
      where: {
        name: "sasa",
      },
    });
    console.log(totalData, `cak bet`);
  });
});
