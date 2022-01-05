const solution = (s) => {
  let answer = "";
  s = s.toLowerCase();
  answer = s.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
  return answer;
};
