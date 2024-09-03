// 버튼 0을 눌렀을 때
// 모든 버튼에 붙은 orange 클래스 제거
// 버튼 0에 orange 클래스 추가
// 모든 div에 show 클래스 제거
// 버튼 0에 show 클래스 추가
const button = '.tab-button';
const content = '.tab-content';

// document
//   .querySelectorAll('.tab-button')[0]
//   .addEventListener('click', function () {
//     document.querySelectorAll(button)[1].classList.remove('orange');
//     document.querySelectorAll(button)[2].classList.remove('orange');
//     document.querySelectorAll(button)[0].classList.add('orange');
//     document.querySelectorAll(content)[1].classList.remove('show');
//     document.querySelectorAll(content)[2].classList.remove('show');
//     document.querySelectorAll(content)[0].classList.add('show');
//   });

// document
//   .querySelectorAll('.tab-button')[1]
//   .addEventListener('click', function () {
//     document.querySelectorAll(button)[0].classList.remove('orange');
//     document.querySelectorAll(button)[2].classList.remove('orange');
//     document.querySelectorAll(button)[1].classList.add('orange');
//     document.querySelectorAll(content)[0].classList.remove('show');
//     document.querySelectorAll(content)[2].classList.remove('show');
//     document.querySelectorAll(content)[1].classList.add('show');
//   });

// document
//   .querySelectorAll('.tab-button')[2]
//   .addEventListener('click', function () {
//     document.querySelectorAll(button)[0].classList.remove('orange');
//     document.querySelectorAll(button)[1].classList.remove('orange');
//     document.querySelectorAll(button)[2].classList.add('orange');
//     document.querySelectorAll(content)[0].classList.remove('show');
//     document.querySelectorAll(content)[1].classList.remove('show');
//     document.querySelectorAll(content)[2].classList.add('show');
//   });

// document.querySelector('.list').addEventListener('click', function (e) {
//   if (e.target === document.querySelectorAll('.tab-button')[0]) {
//     탭열기(0);
//   }
// });

console.log(document.querySelector('.tab-button').dataset.id);
