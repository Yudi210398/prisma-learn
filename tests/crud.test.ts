import { prismaClient } from "../src/prisma";

describe("crud describe", () => {
  it("crud create", async () => {
    const inputCustomer = await prismaClient.customer.create({
      data: {
        id: "hana1",
        email: "hana@gmail.com",
        name: "Hana Safira",
        phone: "081381871739",
      },
    });

    expect(inputCustomer.email).toBe("hana@gmail.com");
  });

  it("crud update", async () => {
    const updateCustomer = await prismaClient.customer.update({
      data: {
        name: "Hana Safira S",
      },
      where: {
        id: "hana1",
      },
    });

    expect(updateCustomer.name).toBe("Hana Safira S");
  });

  it("crud read", async () => {
    const readCustomer = await prismaClient.customer.findUnique({
      where: {
        email: "hana@gmail.com",
      },
    });
    expect(readCustomer?.email).toBe("hana@gmail.com");
  });

  it("crud delete", async () => {
    const deleteCustomer = await prismaClient.customer.delete({
      where: {
        email: "hana@gmail.com",
      },
    });
    expect(deleteCustomer?.email).toBe("hana@gmail.com");
  });
});
