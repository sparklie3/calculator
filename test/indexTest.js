var expect = require("chai").expect;
var app = require("../test.js");

describe("check multiplyCase works", function() {
    var multiplyCase = {
        one : "99×98", 
        two : "99×99",
        three : "234×18×18×3434"
    };
    
    it("multiply works and returns correct result for 99*98", function() {
        var input = app.execute(multiplyCase.one);
        expect(input).to.equal(99 * 98);
    });
    
    it("multiply works and returns correct result for 99*99", function() {
        var input = app.execute(multiplyCase.two);
        expect(input).to.equal(99 * 99);
    });
    
    it("multiply works for 234×18×18×3434", function() {
        var input = app.execute(multiplyCase.three);
        expect(input).to.equal(234 * 18 * 18 * 3434);
    });
    
});

describe("check divideCase works", function() {
    var divideCase = {
        one : "234÷18",
        two : "9.2÷9",
        three : "9÷9"
    };    
    
    
    it("division works and returns correct result for 234/18", function() {
        var input = app.execute(divideCase.one);
        expect(input).to.equal(234 / 18);
    });
    
    it("division works with periods for 9.2/9", function(){
       var input = app.execute(divideCase.two);
       expect(input).to.equal(9.2/9);
    });
    
    it("divide types of calculation works works for 9÷9", function() {
        var input = app.execute(divideCase.three);
        expect(input).to.equal(9 / 9);
    });
    
});
    
describe("check subtractCase and addCase works", function() {
    var subtractCase = {
        one : "434-43"
    };
    
    var addCase = {
        one : "2343+324"
    };
    
    it("subtraction works and returns correct result for 434-43", function() {
        var input = app.execute(subtractCase.one);
        expect(input).to.equal(434-43);
    });
    
    it("addition works and returns correct result for 2343+324", function() {
        var input = app.execute(addCase.one);
        expect(input).to.equal(2343+324);
    });
    
});

    
describe("check order of operations for complexCase works", function() {
    
    var complexCase ={
        one : "9×9÷9×9",
        two : "9×9÷9×9+9", 
        three: "9×9-9÷9×9+9",
        four : "33-34+34×1÷3",
        five: "47+34×1+3×88-2",
        six: "9+9÷9-9",
        seven : "99×98+234",
        eight : "8×6÷9×2.1+5×6"
    };

    

    it("multiple then divide types of calculation works works for 9×9÷9×9", function() {
        var input = app.execute(complexCase.one);
        expect(input).to.equal((9 * 9) / (9 * 9));
    });
    
    it("multiple then divide types of calculation works works for 9+9÷9-9", function() {
        var input = app.execute(complexCase.six);
        expect(input).to.equal((9 + (9 / 9)) - 9);
    });

    it("multiple then divide, then add types of calculation works works for 9×9÷9×9+9", function() {
        var input = app.execute(complexCase.two);
        expect(input).to.equal(((9 * 9) / (9 * 9))+9);
    });

    it("multiple then divid, then add, then subract types of calculation works works for 9×9-9÷9×9+9", function() { 
        var input = app.execute(complexCase.three);
        expect(input).to.equal(81 - ((9 / 81) + 9));
    });
    
    it("first scenario correct 33-34+34×1÷3",function(){
        var input = app.execute(complexCase.four);expect(input).to.equal(33-((34/3)+34)); //this is -12.3    
    });
    
    
    it("second scenario correct 47+34×1+3×88-2",function(){
        var input = app.execute(complexCase.five);
        expect(input).to.equal(343);     
    });
    
    it("third scenario correct 99×98+234",function(){
        var input = app.execute(complexCase.seven);
        expect(input).to.equal(9936);
    });
    
    it("8×6÷9×2.1+5×6 scenario", function() {
        var input = app.execute(complexCase.eight);
        expect(input).to.equal(((8*6)/(9*2.1))+(5*6));
    });
    
});



