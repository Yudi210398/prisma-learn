import { prismaClient } from "../src/prisma";

describe("wherer kondisi", () => {
  it("quals condition", async () => {
    const result = await prismaClient.product.findMany({
      where: {
        name: "A",
      },
    });
    console.log(result, `lers`);
  });

  it("and condition", async () => {
    const result = await prismaClient.product.findMany({
      where: {
        AND: [
          {
            name: "B",
          },
          {
            price: 2000,
          },
        ],
      },
    });
    console.log(result, `lers`);
  });
});
