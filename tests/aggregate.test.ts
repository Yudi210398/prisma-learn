import { prismaClient } from "../src/prisma";

describe("aggreate", () => {
  it("aggreate func", async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
      _sum: {
        price: true,
      },
    });

    console.log(result, `cak bet`);
  });

  it("grupBy func", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
      _sum: {
        price: true,
      },
    });

    console.log(result, `cak bet`);
  });

  it("having func", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
      _sum: {
        price: true,
      },

      having: {
        price: {
          _avg: {
            gt: 3000,
          },
        },
      },
    });

    console.log(result, `cak bet`);
  });
});
