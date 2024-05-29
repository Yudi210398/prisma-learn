import { prismaClient } from "../src/prisma";

describe("one to many", () => {
  it("create one to many", async () => {
    const data = await prismaClient.classes.createMany({
      data: [{ name_class: "Matematika" }, { name_class: "Bahasa Inggris" }],
    });

    console.log(data, `kocak`);
  });

  it("create one to many student", async () => {
    const data = await prismaClient.student.createMany({
      data: [
        { class_id: 1, nama_murid: "Yudi runat" },
        { class_id: 2, nama_murid: "Alex" },
        { class_id: 3, nama_murid: "David" },
        { class_id: 3, nama_murid: "Angel" },
        { class_id: 2, nama_murid: "Rico" },
      ],
    });

    console.log(data, `kocak`);
  });

  it("create one to many find many", async () => {
    const data = await prismaClient.classes.findMany({
      where: {},
      include: {
        Student: true,
      },
    });

    console.log(data[0], `bexhan`);
  });
});
