var position = function(string) {
    var multiplyPosition = [];
    if (string.indexOf("×") !== -1) {
        for (var i = 0; i < string.length; i++) {
            if (string.charAt(i) === "×") {
                multiplyPosition.push(Number(i));
            }
        }
    }
    if (multiplyPosition.length === 1) {
        return multiplyPosition[0];
    }
    else {
        return multiplyPosition;
    }

};


var last = function(string) {
    for (var i = string.indexOf("×") + 1; i < string.length; i++) {
        if (isNaN(string.charAt(i)) || i + 1 === string.length) {
            var after = string.slice(string.indexOf("×") + 1, i + 1);
            return Number(after);
        }
    }
};



var fullArray = function(string) {
    // this if statement removes the last character if it is an operation
    if (isNaN(string.charAt(string.length - 1))) {
        string = string.substring(0, string.length - 1);
    }
    var tempArray = findAllOperations(string);
    var fullArray = [];
    fullArray.push(Number(string.slice(0, tempArray[0])));
    for (var i = 0; i < tempArray.length; i++) {
        if (i % 2 == 0) {
            fullArray.push(string.slice(tempArray[i], tempArray[i] + 1));
            fullArray.push(Number(string.slice(tempArray[i] + 1, tempArray[i + 1])));
        }
        else {
            fullArray.push(string.slice(tempArray[i], tempArray[i] + 1));
            fullArray.push(Number(string.slice(tempArray[i] + 1, tempArray[i + 1])));
        }

    }
    //console.log(fullArray);
    return fullArray;
};


var findAllOperations = function(string) {
    var operationsArrayPosition = [];
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) !== "." && isNaN(string.charAt(i)) && i !== string.length - 1) {
            operationsArrayPosition.push(i);
        }
    }
    return operationsArrayPosition;
};


var multiply = function(value) {
    var tempArray;
    if (!Array.isArray(value)) {
        tempArray = fullArray(value);
        var x = multiply(tempArray);
        return x; //this return is to handle the final recursion
    }
    else if (value.length > 1) {
        for (var i = 0; i < value.length; i++) {
            var output;
            if (i % 2 !== 0 && value[i] === "×") {
                var valueLocation = value.indexOf(value[i]);
                var result = value[i - 1] * value[i + 1];
                value.splice(valueLocation - 1, 3, result);
                output = multiply(value);
                return output;
            }
            else if (i === value.length - 2) {
                return value;
            }
        }

    }
    else {
        return value[0];
    }
};

var divide = function(value) {
    var tempArray;
    if (!Array.isArray(value)) {
        tempArray = fullArray(value);
        var x = divide(tempArray);
        return x; //this return is to handle the final recursion
    }
    else if (value.length > 1) {
        for (var i = 0; i < value.length; i++) {
            var output;
            if (i % 2 !== 0 && value[i] === "÷") {
                var valueLocation = value.indexOf(value[i]);
                var result = value[i - 1] / value[i + 1];
                value.splice(valueLocation - 1, 3, result);
                output = divide(value);
                return output;
            }
            else if (i === value.length - 2) {
                return value;
            }
        }

    }
    else {
        return value[0];
    }
};

var add = function(value) {
    var tempArray;
    if (!Array.isArray(value)) {
        tempArray = fullArray(value);
        var x = add(tempArray);
        return x; //this return is to handle the final recursion
    }
    else if (value.length > 1) {
        for (var i = 0; i < value.length; i++) {
            var output;
            if (i % 2 !== 0 && value[i] === "+") {
                var valueLocation = value.indexOf(value[i]);
                var result = Number(value[i - 1]) + Number(value[i + 1]);
                value.splice(valueLocation - 1, 3, result);
                output = add(value);
                return output;
            }
            else if (i === value.length - 2) {
                return value;
            }
        }

    }
    else {
        return value[0];
    }
};


var subtract = function(value) {
    var tempArray;
    if (!Array.isArray(value)) {
        tempArray = fullArray(value);
        var x = subtract(tempArray);
        return x; //this return is to handle the final recursion
    }
    else if (value.length > 1) {
        for (var i = 0; i < value.length; i++) {
            var output;
            if (i % 2 !== 0 && value[i] === "-") {
                var valueLocation = value.indexOf(value[i]);
                var result = Number(value[i - 1]) - Number(value[i + 1]);
                value.splice(valueLocation - 1, 3, result);
                output = subtract(value);
                return output;
            }
            else if (i === value.length - 2) {
                return value;
            }
        }

    }
    else {
        return value[0];
    }
};



module.exports.position = position;
module.exports.last = last;
module.exports.findAllOperations = findAllOperations;
module.exports.fullArray = fullArray;


module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.addition = add;
module.exports.subtract = subtract;
