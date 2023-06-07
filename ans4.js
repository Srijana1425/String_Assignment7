let s = "Let's take LeetCode contest"
var reverse = function(s) {
    let arrStr = s.split(' ');
    let result = [];
    for (const item of arrStr) {
        result.push(item.split('').reverse().join(''))
    }

    return result.join(' ');
};
console.log(reverse(s))