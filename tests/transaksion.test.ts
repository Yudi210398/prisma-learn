import { prismaClient } from "../src/prisma";

describe("eksekusi", () => {
  it("transaksion", async () => {
    const dataTransaksion = await prismaClient.$transaction(async (prisma) => {
      const sarah = await prisma.customer.create({
        data: {
          id: "sasa1",
          email: "sasa@gmail.com",
          phone: "081388155014",
          name: "sasa",
        },
      });

      const edithana = await prisma.customer.update({
        data: {
          name: "Hana Safira s",
        },
        where: {
          id: "hana1",
        },
      });
      return [sarah, edithana];
    });
    console.log(dataTransaksion, `kocak bet`);
  });
});
