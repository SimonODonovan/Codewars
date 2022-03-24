const assert = require("chai").assert;
const aspectRatio = require("../../../8kyu/aspectRatioCropping1/solution");

describe("aspectRatioCropping1 Fixed tests", () => {
  it("aspectRatioCropping1 should work for known resolutions", () => {
    assert.deepEqual(aspectRatio(640, 480), [854,480], "x = 640, y = 480");
    assert.deepEqual(aspectRatio(960, 720), [1280,720], "x = 960, y = 720");
    assert.deepEqual(aspectRatio(1440, 1080), [1920,1080], "x = 1440, y = 1080");
    assert.deepEqual(aspectRatio(1920, 1440), [2560,1440], "x = 1920, y = 1440");
  });
});
describe("aspectRatioCropping1 Random tests", () => {
  const makenum = () => Math.floor(Math.random() * 4000);
  const predefined = (x,y) => [Math.ceil(y*16/9), y];
  it("aspectRatioCropping1 should work for random inputs", () => {
    for (let run = 0; run < 100; run++) {
      let a = makenum();
      let b = makenum();
      assert.deepEqual(aspectRatio(a,b), predefined(a,b), `x = ${a}, y= ${b}`);
    }
  });
});