const solution = (record) => {
  const answer = [];
  const hash = new Map();
  const idCheck = [];
  const inoutCheck = [];

  for (let x of record) {
    const [type, id, nickname] = x.split(" ");
    if (type === "Enter") {
      hash.set(id, nickname);
      idCheck.push(id);
      inoutCheck.push("in");
    } else if (type === "Leave") {
      idCheck.push(id);
      inoutCheck.push("out");
    } else {
      hash.set(id, nickname);
    }
  }
  for (let i = 0; i < idCheck.length; i++) {
    if (inoutCheck[i] === "in") {
      answer.push(`${hash.get(idCheck[i])}님이 들어왔습니다.`);
    } else {
      answer.push(`${hash.get(idCheck[i])}님이 나갔습니다.`);
    }
  }
  return answer;
};
