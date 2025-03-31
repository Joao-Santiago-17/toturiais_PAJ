const example = require("./example");

test("sum of 5 and 2 is equal to 7", () => {
    expect(example.sum(5, 2)).toBe(7);
   });
   test("sum of 5 and 2 is not equal to 6", () => {
    expect(example.sum(5, 2)).not.toBe(6);
   });