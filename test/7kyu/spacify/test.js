const {assert} = require("chai");
const spacify = require("../../../7kyu/spacify/solution");

describe("spacify", function() {
  it("spacify basic tests", function() {
    assert.strictEqual(spacify('hello world'),'h e l l o   w o r l d');
    assert.strictEqual(spacify('12345'),'1 2 3 4 5');
  });
});