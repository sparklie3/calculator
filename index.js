/*global $*/

$(document).ready(function() {
    var period = false;
    var multiply = "×";
    var divide = "÷";
    var add = "+";
    var subtract = "-";

    function periodInsert(data) {
        if (!period) {
            $("#display").append(data);
            period = true;
        }
    }

    function periodCheck(data) {
        if (period == true) {
            var isTrue = data.indexOf(".");
            if (isTrue == -1) {
                period = false;
            }
        }
    }

    function setZero() {
        $("#display").html(0);
        period = false;
    }
    /*
    function clear(){
        $("#display").empty();
    }
    */

    function displayData(data) {
        var currentStr = $("#display").html();
        if (currentStr == "0") {
            if (data != "0") {
                $("#display").html(data);
            }

        }
        else {
            $("#display").append(data);
        }
    }


    function removeOne(data) {
        if (data == "") {
            setZero();
        }
        else {
            $("#display").html(data);
            periodCheck(data);
        }
    }

    function returnArrayofOperationPosition(string) {
        var outputArray = [];

        // this if statement removes the last character if it is an operation or period
        if (isNaN(string.charAt(string.length - 1))) {
            string = string.slice(0, -1);
        }

        for (var i = 0; i < string.length; i++) {
            if (string.charAt(i) !== "." && isNaN(string.charAt(i)) && i !== string.length - 1) {
                outputArray.push(i);
            }
        }
        return outputArray;
    }


    function returnFinalArray(string) {
        var outputArray = [];
        // this if statement removes the last character if it is an operation or period
        if (isNaN(string.charAt(string.length - 1))) {
            string = string.slice(0, -1);
        }
        //call function to create array of position where the operation is located
        var tempArray = returnArrayofOperationPosition(string);

        //creates final array with all numbers and operations
        outputArray.push(Number(string.slice(0, tempArray[0])));
        for (var i = 0; i < tempArray.length; i++) {
            if (i % 2 == 0) {
                outputArray.push(string.slice(tempArray[i], tempArray[i] + 1));
                outputArray.push(Number(string.slice(tempArray[i] + 1, tempArray[i + 1])));
            }
            else {
                outputArray.push(string.slice(tempArray[i], tempArray[i] + 1));
                outputArray.push(Number(string.slice(tempArray[i] + 1, tempArray[i + 1])));
            }
        }
        console.log(outputArray);
        return outputArray;
    }

    function calculateNumberOfOperators(data) {
        var operators = {
            "multiply": 0,
            "divide": 0,
            "add": 0,
            "subtract": 0
        };
        //getting the position of all operators
        var operatorPositionArray = returnArrayofOperationPosition(data);

        //updates the operator json object
        for (var i = 0; i < operatorPositionArray.length; i++) {
            switch (data[operatorPositionArray[i]]) {
                case multiply:
                    operators.multiply++;
                    break;
                case divide:
                    operators.divide++;
                    break;
                case add:
                    operators.add++;
                    break;
                case subtract:
                    operators.subtract++;
                    break;
            }


        }
        return operators;
    }

    function executeOrderOfOperations(value) {
        //console.log(value);
        var operator = calculateNumberOfOperators(value);
        var arg = returnFinalArray(value);
        for (var i = 0; i < operator.multiply; i++) {
            arg.splice(arg.indexOf(multiply) - 1, 3, arg[arg.indexOf(multiply) - 1] * arg[arg.indexOf(multiply) + 1]);
            //console.log(arg);
        }
        for (var i = 0; i < operator.divide; i++) {
            arg.splice(arg.indexOf(divide) - 1, 3, arg[arg.indexOf(divide) - 1] / arg[arg.indexOf(divide) + 1]);
            //console.log(arg);
        }
        for (var i = 0; i < operator.add; i++) {
            arg.splice(arg.indexOf(add) - 1, 3, arg[arg.indexOf(add) - 1] + arg[arg.indexOf(add) + 1]);
            //console.log(arg);
        }
        for (var i = 0; i < operator.subtract; i++) {
            arg.splice(arg.indexOf(subtract) - 1, 3, arg[arg.indexOf(subtract) - 1] - arg[arg.indexOf(subtract) + 1]);
            //console.log(arg);
        }
        return arg[0];
    }


    $(".operation").click(function() {
        var str = $(this).html();
        displayData(str);
        period = true ? period = false : console.log(period); 
    });


    $("#clear").click(function() {
        setZero();
    });

    $(".number").click(function() {
        //alert($(this).html());
        var str = $(this).html();
        displayData(str);
    });

    $("#period").click(function() {
        var str = $(this).html();
        periodInsert(str);
    });

    $("#back").click(function() {
        var str = $("#display").html();
        console.log(str);
        str = str.slice(0, -1);
        console.log(str);
        removeOne(str);
    });


    $("#equal").click(function() {
        var input = $("#display").html();
        var result = executeOrderOfOperations(input);
        console.log(result);
        $("#display").html(result);
    });
});
