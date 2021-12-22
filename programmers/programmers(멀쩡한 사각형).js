function gcd(w, h) {
  const mod = w % h;
  if (mod === 0) {
    return h;
  }
  return gcd(h, mod);
}

function solution(w, h) {
  var answer = 1;
  answer = w * h - (w + h - gcd(w, h));
  return answer;
}
