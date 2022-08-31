// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce((arr, cur) => {
    if (cur < 0) cur = 0;
    return arr + cur;
  }, 0);
}
