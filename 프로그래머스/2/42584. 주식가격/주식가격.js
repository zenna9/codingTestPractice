function solution(prices) {
  // 구현 내용
  return (hh = prices.map((price, index) => {
    let 유지횟수 = 0;
    for (let i = index + 1; i < prices.length; i++) {
      const checking = prices[i];
      유지횟수++;
      if (checking < price) {
        break;
      }
    }
    return 유지횟수;
  }));
}