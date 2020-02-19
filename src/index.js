module.exports = function reverse (n) {
  let k = (+n<0)?-1:1;
  n= +n / k;
  return Number(n.toString().split('').reverse().join(''));
}
