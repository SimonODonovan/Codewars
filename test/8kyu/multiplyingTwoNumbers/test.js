const chai = require('chai');
const assert = chai.assert;
const multiplyTwo = require("../../../8kyu/multiplyingTwoNumbers/solution")

function getRandom(){
  return Math.random()*1000-500|0
}

describe( "multiplyingTwoNumbers Testing multiply", function(){
  it( "multiplyingTwoNumbers Should return 10 multiplications correctly", function(){
    for ( let i=0; i<10; i++ ){
      let x = getRandom(), y = getRandom();
      assert.strictEqual( multiplyTwo(x, y), x * y, "that's not the correct multiplication!" )
    }
  });
});