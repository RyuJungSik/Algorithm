const solution = (fees, records) => {
  const answer = [];
  const hash = new Map();

  for (let str of records) {
    const [time, carNum, IOType] = str.split(" ");
    if (!hash.has(carNum)) {
      hash.set(carNum, [time]);
    } else {
      hash.get(carNum).push(time);
    }
  }
  for (let x of hash.values()) {
    if (x.length % 2 === 1) x.push("23:59");
  }
  const carNums = [...hash.keys()].sort((a, b) => a - b);

  for (let carNum of carNums) {
    let allMins = 0;
    const times = hash.get(carNum);
    for (let i = 0; i < times.length; i += 2) {
      const [inTime, outTime] = [times[i], times[i + 1]];
      const [inHour, inMin] = inTime.split(":").map(Number);
      const [outHour, outMin] = outTime.split(":").map(Number);
      allMins += outHour * 60 + outMin - (inHour * 60 + inMin);
    }
    if (allMins <= fees[0]) answer.push(fees[1]);
    else {
      answer.push(fees[1] + Math.ceil((allMins - fees[0]) / fees[2]) * fees[3]);
    }
  }
  return answer;
};
