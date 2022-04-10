const solution = (N, number) => {
  const dp = Array.from({ length: 9 }, () => []);
  dp[0].push(0);
  dp[1].push(N);

  if (N === number) {
    return 1;
  }

  for (let now = 2; now < 9; now++) {
    let tmp = "";
    for (let j = 0; j < now; j++) tmp += String(N);
    dp[now].push(+tmp);

    for (let i = 1; i < now; i++) {
      for (const value1 of dp[i]) {
        for (const value2 of dp[now - i]) {
          dp[now].push(value1 + value2);
          dp[now].push(value1 - value2);
          dp[now].push(value1 * value2);
          dp[now].push(parseInt(value1 / value2));
        }
      }
    }
    const s = new Set(dp[now]);
    dp[now] = [...s];
    if (dp[now].includes(number)) return now;
  }
  return -1;
};
