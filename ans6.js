let s = "abcde", goal = "cdeab"
var shifts  = function (s, goal) {
    let x = s;
    for (let i = 0; i < s.length; i++) {
        x =  x.substring(1,x.length) + s[i]
        if(x === goal){
            return true
        }
    }
    return false
};
console.log(shifts (s, goal))