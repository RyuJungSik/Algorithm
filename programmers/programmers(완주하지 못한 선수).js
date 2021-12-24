const solution = (participant, completion) => {
  let answer = "";
  const hash = new Map();
  completion.map((name) => {
    if (hash.has(name)) {
      hash.set(name, hash.get(name) + 1);
    } else {
      hash.set(name, 1);
    }
  });

  participant.map((name) => {
    if (!hash.has(name) || hash.get(name) === 0) {
      answer = name;
      return;
    } else {
      hash.set(name, hash.get(name) - 1);
    }
  });
  return answer;
};
