// 1초 >> 1000ms
// 1분 >> 60000ms
// 1시간 >> 360000ms

function time(m, s) {
  let minute = m * 60000;
  let second = s * 1000;
  return minute + second;
}

console.log(time(1, 30));
console.log(time(2, 10));

function value(money, TF) {
  if (TF) {
    return parseFloat(money - money * (1 / 10) - 1.5);
  } else {
    return parseFloat(money - money * (1 / 10));
  }
}

console.log(value(70, false));
console.log(value(10, true));
