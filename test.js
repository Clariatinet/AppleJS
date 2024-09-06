const 출석부 = ['흥민', '영희', '철수', '재석'];

function find(name) {
  for (let i = 0; i < 출석부.length; i++) {
    if (name === 출석부[i]) {
      console.log('ㅇㅇ');
    }
  }
}

find('철수');
