let s = "ab#c" , t = "ad#c"
var  backspace = function(s, t) {
    return buildString(s) === buildString(t);
  }
  
  function buildString(str) {
    const result = [];
  
    for (let char of str) {
      if (char !== "#") {
        result.push(char);
      } else {
        result.pop();
      }
    }
  
    return result.join("");
  }
  

  console.log(backspace(s, t));