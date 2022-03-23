const chai = require("chai");
const assert = chai.assert;
const passHash = require("../../../7kyu/passwordHashes/solution")

describe('passwordHashes passHash()', function() {
    it('should pass example tests', function() {
      let tests = [['password', '5f4dcc3b5aa765d61d8327deb882cf99'],['abc123', 'e99a18c428cb38d5f260853678922e03']];
      for (let i = 0; i < tests.length; i++)
      assert.strictEqual(passHash(tests[i][0]), tests[i][1])  
    });
    
    it('passwordHashes should pass randomized tests', function() {
      let tests = Array.apply(Array, Array(5)).map(function(v) {
        return Math.random().toString(36).substring(2, 5);
      });
      
      //just in case they override Math.random
      tests.push((new Date()).getTime().toString());
      
      tests.forEach(function(v) {
        assert.strictEqual(passHash(v), require('crypto').createHash('md5').update(v).digest('hex'))
      });
    });
  });