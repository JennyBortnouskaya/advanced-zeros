module.exports = function getZerosCount(number, base) {
  let i, m, n, t, s;
  let value = number;
  let k = base;

  for (i = 2; i <= base; i += 1) {
      if (k % i === 0) {
          m = 0;
          n = 0;
          t = number;
          while (k % i === 0) {
              m++;
              k = Math.floor(k / i);
          }

          findCount();

          value = Math.floor(n / m);
      }
  }

  function findCount() {
      s = Math.floor(t / i);
      n = n + s;
      t = s;
      if (s > 0) {
          findCount();
      }
  };

  return value;
} 
