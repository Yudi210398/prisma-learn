import { prismaClient } from "../src/prisma";

describe("crud many", () => {
  it("crud many create", async () => {
    const hasil = await prismaClient.customer.createMany({
      data: [
        {
          name: "dina",
          email: "dina@gmail.com",
          phone: "081355695854",
          id: "dina1",
        },
        {
          name: "rico",
          email: "rico@gmail.com",
          phone: "081355693455",
          id: "rico1",
        },
      ],
    });
    console.log(hasil, `kocak`);
  });

  it("crud many update", async () => {
    const hasil = await prismaClient.customer.updateMany({
      data: {
        email: "joseph@gmail.com",
      },
      where: {
        id: "rico1",
      },
    });
    console.log(hasil, `kocak`);
  });

  it("crud many delete", async () => {
    const hasil = await prismaClient.customer.deleteMany({
      where: {
        name: "rico",
      },
    });
    console.log(hasil, `kocak`);
  });

  it("crud many read", async () => {
    const hasil = await prismaClient.customer.findMany();
    console.log(hasil, `kocak`, hasil.length);
  });
});
