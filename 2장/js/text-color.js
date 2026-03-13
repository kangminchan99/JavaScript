// heading 요소를 선택하여 클릭 이벤트를 설정
const heading = document.querySelector('#heading');
// 클릭할 때마다 텍스트 색상을 빨간색과 파란색으로 번갈아 변경
heading.onclick = function () {
  heading.style.color = heading.style.color === 'red' ? 'blue' : 'red';
};
