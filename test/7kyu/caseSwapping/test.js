const chai = require("chai");
const assert = chai.assert;
const swap = require('../../../7Kyu/caseSwapping/solution');

describe("caseSwapping Basic tests",function(){
    assert.strictEqual(swap('HelloWorld'), 'hELLOwORLD');
    assert.strictEqual(swap('CodeWars'), 'cODEwARS');
    assert.strictEqual(swap('ThIs iS A l0NG sENTence witH nUMbERs in IT 123 456'), 'tHiS Is a L0ng SentENCE WITh NumBerS IN it 123 456');
    assert.strictEqual(swap(''), '');
    assert.strictEqual(swap(' '), ' ');
    assert.strictEqual(swap('H_E_l-l_0 WO|||Rld'), 'h_e_L-L_0 wo|||rLD');
    assert.strictEqual(swap('TeSt'), 'tEsT');
    assert.strictEqual(swap('EeEEeeEEEeee'), 'eEeeEEeeeEEE');
    })
    
    describe("caseSwapping Random tests",function(){
    function randint(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
    base="abcdefghijklmnopqrstuvwxyz 0123456789 ,._-";
    function sol(str){
      var res=[], str=str.split("");
      for (var i=0;i<str.length;i++){
        if (str[i]==str[i].toUpperCase()) res.push(str[i].toLowerCase());
        else res.push(str[i].toUpperCase());
      }
      return res.join("");
    }
    
    for (var _=0;_<40;_++){
        var s=[], len=randint(1,50);
        for (var j=0;j<len;j++){
          s.push(randint(0,1)==1 ? base[randint(0,base.length-1)].toUpperCase() : base[randint(0,base.length-1)])
        }
        s=s.join("")
        it("Testing for "+s,function(){
        assert.strictEqual(swap(s), sol(s),"It should work for random inputs too")
        })
    }
    })