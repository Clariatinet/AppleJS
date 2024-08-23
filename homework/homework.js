function 삼육구게임(n) {
  if (n <= 0) {
    console.log('1부터 시작하세요.');
  } else if (n % 3 === 0) {
    console.log('박수');
  } else if (n % 3 === 1) {
    console.log('통과');
  } else if (n % 3 === 2) {
    console.log('통과');
  }
}

삼육구게임(0);
삼육구게임(6);
삼육구게임(12);
삼육구게임(11);

function 삼육구(num) {
  if (num <= 0) {
    console.log('1부터 시작하세요.');
  } else if (num % 9 === 0) {
    console.log('박수박수');
  } else if (num % 3 === 0) {
    console.log('박수');
  } else {
    console.log('통과');
  }
}

삼육구(6);
삼육구(9);
삼육구(11);

function 합격(num1, num2) {
  if (num1 + num2 >= 120) {
    console.log('합격');
  } else if (num1 < 40 || num2 < 40) {
    console.log('불합격');
  } else {
    console.log('불합격');
  }
}

합격(70, 70);
합격(30, 100);
합격(50, 50);
