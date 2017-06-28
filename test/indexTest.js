var expect = require("chai").expect;
var app = require("../test.js");

describe("check multiplication of 99*98", function() {
    var string = "99×98";

    it("multiple has charAt location of 2", function() {
        var input = app.position(string);
        expect(input).to.equal(2);
    });

    it("show the last two numbers is 98", function() {
        var input = app.last(string);
        expect(input).to.equal(98);
    });

    it("multiply works and returns correct result", function() {
        var input = app.multiply(string);
        expect(input).to.equal(99 * 98);
    });
});


describe("check multiplication of 234*18", function() {
    var string = "234×18";

    it("multiple operation has charAt location of 3", function() {
        var input = app.position(string);
        expect(input).to.equal(3);
    });


    it("show the last two numbers of 18", function() {
        var input = app.last(string);
        expect(input).to.equal(18);
    });

    it("multiply works", function() {
        var input = app.multiply(string);
        expect(input).to.equal(234 * 18);
    });
});

describe("parse string and push into an array first", function() {
    
    var string2 = "234234+9934÷6-7-33+22÷33+";

    it("position of all the operations in an array correctly for string 99×99÷666-33+88÷33", function() {
        var answer = [2, 5, 9, 12, 15];
        var string = "99×99÷666-33+88÷33";
        var input = app.findAllOperations(string);
        expect(input).to.deep.equal(answer);
    });
    
    it("position of all the operations in an array correctly when there are multiple periods for string 99.3×99.5÷666-33.0+88.1÷33.3", function() {
        var answer = [4, 9, 13, 18, 23];
        var string = "99.3×99.5÷666-33.0+88.1÷33.3";
        var input = app.findAllOperations(string);
        expect(input).to.deep.equal(answer);
    });
    

    it("array of all the values in the array for 99×99÷666-33+88÷33", function() {
        var answer = [99, "×", 99, "÷", 666, "-", 33, "+", 88, "÷", 33];
        var string = "99×99÷666-33+88÷33";
        var input = app.fullArray(string);
        expect(input).to.deep.equal(answer);

    });

    it("array of all the values for a second case 234234+9934÷6-7-33+22÷33+ and remove the last operation", function() {
        var answer = [234234, "+", 9934, "÷", 6, "-", 7, "-", 33, "+", 22, "÷", 33];
        var input = app.fullArray(string2);
        expect(input).to.deep.equal(answer);

    });

});



describe("calculation  is done correctly", function() {
    
    
    it("multiply works for 234×18×18×3434", function() {
        var string = "234×18×18×3434";
        var input = app.multiply(string);
        //console.log(typeof app.compute2);
        expect(input).to.equal(234 * 18 * 18 * 3434);
    });
    
    it("multiple works with periods", function(){
       var string = "9.2÷9";
       var input = app.divide(string);
       expect(input).to.equal(9.2/9);
    });

    it("divide types of calculation works works for 9÷9", function() {
        var string3 = "9÷9";
        var m = app.divide(string3);
        //console.log(typeof app.compute2);
        expect(m).to.equal(9 / 9);
    });
    

    it("multiple then divide types of calculation works works for 9×9÷9×9", function() {
        var string2 = "9×9÷9×9";
        var m = app.multiply(string2);
        //console.log("test"+m);
        var d = app.divide(m);
        //console.log(typeof app.compute2);
        
        expect(d).to.equal((9 * 9) / (9 * 9));
    });

    it("multiple then divid, then add types of calculation works works for 9×9÷9×9+9", function() {
        var string4 = "9×9÷9×9+9";
        var m = app.multiply(string4);
        //console.log("test"+m);
        var d = app.divide(m);
        var a = app.addition(d);
        //console.log(typeof app.compute2);
        expect(a).to.equal(((9 * 9) / (9 * 9))+9);
    });

    it("multiple then divid, then add, then subract types of calculation works works for 9×9-9÷9×9+9", function() { 
        var string5 = "9×9-9÷9×9+9"; 
        var m = app.multiply(string5);
        //console.log("test"+m);
        var d = app.divide(m);
        var a = app.addition(d);
        var s = app.subtract(a);
        //console.log(typeof app.compute2);
        expect(s).to.equal(81 - ((9 / 81) + 9));
    });

});

describe("order of operation is done correctly", function(){
    var scenarioOne = "33-34+34×1÷3";
    var scenarioTwo = "47+34×1+3×88-2";
    var scenarioThree = "99×99";
    
    
    it("first scenario correct",function(){
    var scenarioOneOutput= app.subtract(app.addition(app.divide(app.multiply(scenarioOne))));
    expect(scenarioOneOutput).to.equal(33-((34/3)+34)); //this is -12.3    
    });
    
    
    it("second scenario correct",function(){
    var scenarioTwoOutput= app.subtract(app.addition(app.divide(app.multiply(scenarioTwo))));
    expect(scenarioTwoOutput).to.equal(343);     
    });
    
    it("third scenario correct",function(){
    var scenarioThreeOutput= app.divide(app.multiply(scenarioThree));
    expect(scenarioThreeOutput).to.equal(9801);
    });
    
});


describe("checks type of operations", function() {
    var scenarioOne = "99×98";
    var scenarioTwo = "99×98+234";
    var scenarioThree = "9+9÷9-9";
    
    
    it("has only multiple",function(){
        
        
        expect(output).to.equal(["multiply"]);
    });
    
    it("has multiply and addition",function() {
        expect(output).to.equal(["multiply","add"]);
    });
    
    it("has divide, addition, and subtract",function() {
        expect(output).to.equal(["divide","add","subtract"]);
    });
    
});

/*
describe("ability to find the right operation", function() {
   it("able to find the multiple operation", function(){
      var answer = "multiply";
      var string = "234×18";
      var input = app.findOperation(string);
      expect(input).to.equal(answer);
      
       
   });
   
    
});
*/