import { prismaClient } from "../src/prisma";

describe("auto inc", () => {
  it("inc", async () => {
    const autoInc = await prismaClient.category.create({
      data: { name: "hana" },
    });
    console.log(autoInc, `cak bet`);
  });
});
