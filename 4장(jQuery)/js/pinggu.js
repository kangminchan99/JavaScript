$(document).ready(function () {
  // #pingGu 요소를 jQuery 객체로 선택하여 변수에 저장합니다.
  const $pingGu = $('#pingGu');
  // #btnStart 버튼에 클릭 이벤트 리스너를 추가합니다.
  $('#btnStart').click(function () {
    $pingGu.animate({ left: '400px' }, 1000); // #pingGu 요소를 왼쪽에서 400px 이동시키는 애니메이션을 1초 동안 실행합니다.
  });
});
