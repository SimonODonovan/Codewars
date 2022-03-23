const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const getAge = require('../../../8Kyu/parseNiceIntFromChar/solution');

describe("parseNiceIntFromChar Basic tests",() =>{
  it("parseNiceIntFromChar Testing for fixed tests", () => {
    assert.strictEqual(getAge("4 years old"), 4);
    assert.strictEqual(getAge("5 years old"), 5);
    assert.strictEqual(getAge("7 years old"), 7);
    assert.strictEqual(getAge("6 years old"), 6);
    assert.strictEqual(getAge("8 years old"), 8);
    assert.strictEqual(getAge("9 years old"), 9);
    assert.strictEqual(getAge("1 year old"), 1);
    assert.strictEqual(getAge("2 years old"), 2);
    assert.strictEqual(getAge("3 years old"), 3);
  })
})