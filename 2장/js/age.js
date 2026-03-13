// 함수 calculateAge()선언과 구현체
function calculateAge() {
  // prompt() - 사용자로부터 태어난 년도를 입력받음
  var birthYear = prompt('태어난 년도를 입력하세요:', 'YYYY');
  // 현재 연도 구하기
  var currentYear = new Date().getFullYear();
  // 나이 계산
  var age = currentYear - birthYear + 1;
  // document는 현재 웹브라우저의 페이지를 의미하고 querySelector() 메서드는 id가 result인 웹 요소 (div)를 의미한다.
  // innerHTML은 대입한 값으로 html문서에 대체하는 속성
  document.querySelector('#result').innerHTML =
    '당신의 나이는 ' + age + '세입니다.';
}
