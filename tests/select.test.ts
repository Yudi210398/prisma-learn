import { prismaClient } from "../src/prisma";

describe("select data", () => {
  it("select  data crud", async () => {
    const select = await prismaClient.customer.create({
      data: {
        name: "bella",
        email: "bella@gmail.com",
        phone: "081655458412",
        id: "bella1",
      },
      select: {
        name: true,
        phone: true,
      },
    });
    console.log(select, `kocak bet`);
  });

  it("select find many", async () => {
    const select = await prismaClient.customer.findMany({
      select: {
        name: true,
        phone: true,
      },
    });
    console.log(select, `kocak bet`);
  });
});
