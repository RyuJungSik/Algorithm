const solution = (info, query) => {
  const answer = [];
  const peopleInfo = [];

  for (let str of info) peopleInfo.push(str.split(" "));
  peopleInfo.sort((a, b) => a[4] - b[4]);
  // console.log(peopleInfo)

  for (let oneQuery of query) {
    let cnt = 0;
    const [lang, pos, level, foodAndScore] = oneQuery.split(" and ");
    const [food, score] = foodAndScore.split(" ");
    let left = 0;
    let right = peopleInfo.length - 1;
    let check = 0;
    while (left <= right) {
      let mid = parseInt((left + right) / 2);

      if (+peopleInfo[mid][4] < +score) {
        check = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // console.log(score)
    // console.log(check)
    for (let i = check; i < peopleInfo.length; i++) {
      const [personLang, personPos, personLevel, personFood, personScore] =
        peopleInfo[i];
      if (!(lang === "-" || personLang === lang)) continue;
      if (!(pos === "-" || personPos === pos)) continue;
      if (!(level === "-" || personLevel === level)) continue;
      if (!(food === "-" || personFood === food)) continue;
      if (+personScore < +score) continue;
      cnt += 1;
    }
    answer.push(cnt);
  }

  return answer;
};
