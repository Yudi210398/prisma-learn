import { prismaClient } from "../src/prisma";

describe("query", () => {
  interface Samples {
    id: number;
    name: string;
  }

  it("query_prisma", async () => {
    const id = 2;
    const sample: Samples[] =
      await prismaClient.$queryRaw`SELECT * FROM sampe where id = ${id}`;

    sample.map((data) => console.log(data?.id, data.name));
  });
});
