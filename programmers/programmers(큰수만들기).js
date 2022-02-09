const solution = (number, k) => {
  const stack = [];
  for (let chr of number) {
    while (k > 0 && stack[stack.length - 1] < +chr) {
      stack.pop();
      k--;
    }
    stack.push(+chr);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
};
