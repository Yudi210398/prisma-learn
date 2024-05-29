import { prismaClient } from "../src/prisma";

describe("one to one relasi", () => {
  it("one to one ", async () => {
    const createWallet = await prismaClient.wallet.create({
      data: {
        id: "hana_wallet",
        customer_id: "hana1",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });
    console.log(createWallet, `kocak bet`);
  });

  it("find one to one", async () => {
    const createWallet = await prismaClient.customer.findUnique({
      where: {
        id: "joko1",
      },

      include: {
        wallet: true,
      },
    });
    console.log(createWallet, `kocak bet`);
  });

  it("create one to one customer", async () => {
    const createWallet = await prismaClient.customer.create({
      data: {
        id: "joko1",
        name: "joko",
        phone: "081544525986",
        email: "joko@gmail.com",
        wallet: { create: { id: `joko_walet`, balance: 2000000 } },
      },
      include: {
        wallet: true,
      },
    });
    console.log(createWallet, `kocak bet`);
  });
});
