import { prismaClient } from "../src/prisma";

describe("eksekusi", () => {
  it("coba", async () => {
    const dataInput =
      await prismaClient.$executeRaw`INSERT INTO sampe(name) VALUES (${"sarah"})`;
    console.log(dataInput, `lers`);
  });
});
