module.exports = function check(str, bracketsConfig) {
  brackets = {};
  stack = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] in brackets && str[i] !== brackets[str[i]]) {
      stack.push(str[i])
    }
    else if (str[i] in brackets && str[i] === brackets[str[i]]) {
      str[i] !== stack[stack.length - 1] ? stack.push(str[i]) : brackets[stack.pop()]   // <-----------
    }
    else if (brackets !== 0 && str[i] === brackets[stack.pop()]) {
    }
    else {
      return false
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}