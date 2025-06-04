function solution(keymap, targets) {
  let letterMap = {};

  keymap.forEach((btn) => {
    [...btn].forEach((touch, index) => {
      if (!(touch in letterMap)) {
        letterMap[touch] = index;
      } else {
        if (letterMap[touch] > index) {
          letterMap[touch] = index;
        }
      }
    });
  });

  return targets.map((message) => {
    let touchCnt = 0;
    let messageArr = [...message];

    for (let i = 0; i < messageArr.length; i++) {
      const element = messageArr[i];

      if (!(element in letterMap)) {
        return -1;
      } else {
        touchCnt += letterMap[element] + 1;
      }
    }
    return touchCnt;

  });
}