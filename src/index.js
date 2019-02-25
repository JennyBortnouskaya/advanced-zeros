module.exports = function getZerosCount(number, base) {
  // your implementation  
  let pre;
  const numb = [];
  const digit = [];
  const step = [];
  let x = 0;
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      base /= i;
      digit.push(i);
      step.push(1);
      while (base % i === 0) {
        step[x] += 1;
        base /= i;
      }
      x += 1;
    }
  }
  digit.forEach((item, i) => {
    pre = 0;
    for (let j = item; j < number; j *= item) {
      pre += Math.floor(number / j)
    }
    numb.push(Math.floor(pre / step[i]));
  });
  let answer = numb[0];
  for (let i = 0; i < numb.length; i++) {
    numb[i] < answer ? answer = numb[i] : null;
  }
  return answer;
}