function solution(players, m, k) {
  let answer = 0;
  const server = new Array(24).fill(0);

  for (let i = 0; i < 24; i++) {
    const required = Math.floor(players[i] / m);
    const current = server[i];
    const need = required - current;

    if (need > 0) {
      answer += need;
      for (let j = i; j < Math.min(24, i + k); j++) {
        server[j] += need;
      }
    }
  }

  return answer;
}