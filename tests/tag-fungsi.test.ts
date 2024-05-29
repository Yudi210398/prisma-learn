function tagFunctions(array: any, ...args: any) {
  console.log(args);
  console.log(array);
}

describe("halo", function () {
  it("tag", function () {
    const name = "hana";
    tagFunctions`Halo ${name} saya orang`;
  });
});
