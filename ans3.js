let num1 = "11", num2 = "123"
var addStrings = function (num1, num2) {
    var x = []
    let y = 0
    let i = num1.length - 1
    let j = num2.length - 1
    while (i >= 0 || j >= 0) {
        let sum = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + y
        x.unshift(sum % 10)
        y = sum > 9 ? 1 : 0
        i--;
        j--; 
    }
    if (y == 1) {
        x.unshift(1)
    }
    return x.join("")
};
console.log(addStrings(num1,num2))