const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const maps = require("../../../8kyu/beginnerLostWithoutAMap/solution");

describe("beginnerLostWithoutAMap Basic tests", ()=>{
  it("Fixed tests", () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
  });

  it("beginnerLostWithoutAMap Sanity test", ()=>{
    const a = [1,2,3];
    maps(a);
    assert.deepEqual( a.join("")==="123", true, "Do not mutate your input!" );
  });
});

describe( "beginnerLostWithoutAMap Random tests", ()=>{
  const refMaps = x => x.map( x => x*2 ) ;
  const names = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rnd = n => Math.floor( Math.random() * n );
  
  it("beginnerLostWithoutAMap Testing for 100 random tests", () => {
  for ( let i=100; i--; ) {
    const a = Array.from( { length: rnd(7)+2 }, () => names[rnd(names.length)] );
    assert.deepEqual(maps(a.slice()), refMaps(a.slice()), `Testing for [${a}]`);
   };
  });
});