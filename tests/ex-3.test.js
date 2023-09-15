import fs from "fs/promises";

describe("Exercise 3", () => {
  it("ค่า fahrenheit จะต้องเป็นค่าที่ถูกต้อง", async () => {
    const data = await fs.readFile("./ex-3.js");

    const code = `${data} 
    return fahrenheit;`;

    const func = new Function(code);
    const result = func();

    expect(result).toStrictEqual(86);
  });
});
