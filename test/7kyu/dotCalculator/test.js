const strictEqual = require("chai").assert.strictEqual;
const dotCalculator = require("../../../7kyu/dotCalculator/solution");

function doTest (string, expected) {
  const actual = dotCalculator(string);
  strictEqual(actual, expected, `for string:\n"${string}"\n`);
}

describe("dotCalculator Tests suite", function () {
  it("dotCalculator sample tests", function () {
    doTest("..... + ...............", "....................");
    doTest("..... - ...", "..");
    doTest("..... - .", "....");
    doTest("..... * ...", "...............");
    doTest("..... * ..", "..........");
    doTest("..... // ..", "..");
    doTest("..... // .", ".....");
    doTest(". // ..", "");
    doTest(". - .", "");
  });

  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const MAX_DOTS = 30;

  function makeTestCase () {
    let a = randInt(1, MAX_DOTS);
    let b = randInt(1, MAX_DOTS);

    let result, operator;

    switch (randInt(0, 3)) {
    case 0:
        result = a + b;
        operator = '+';
        break;
    case 1:
        if (b > a) {
          let tmp = a; a = b; b = tmp;
        }
        result = a - b;
        operator = '-';
        break;
    case 2:
        result = Math.floor(a / b);
        operator = '//';
        break;
    case 3:
        a = Math.max(a, 10); // avoiding very long strings
        b = Math.max(b, 10);

        result = a * b;
        operator = '*';
        break;
    }
    const input = '.'.repeat(a) + ' ' + operator + ' ' + '.'.repeat(b);
    const expected = '.'.repeat(result);
    return {input, expected};
  }

  it("dotCalculator random tests", function () {
    for (let i = 0; i < 100; i++) {
      const {input, expected} = makeTestCase();
      doTest(input, expected);
    }
  });
});