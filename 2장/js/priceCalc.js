function showPrice() {
  const originalPrice = document.getElementById('originalPrice').value;
  const discountRate = document.getElementById('discountRate').value;
  if (isNaN(originalPrice) || isNaN(discountRate)) {
    alert('원래 가격과 할인율은 숫자로 입력해야 합니다.');
    return;
  }

  if (originalPrice < 0 || discountRate < 0 || discountRate > 100) {
    alert(
      '원래 가격은 음수일 수 없으며, 할인율은 0%에서 100% 사이여야 합니다.',
    );
    return;
  }

  const savePrice = originalPrice * (discountRate / 100);
  const resultPrice = originalPrice - savePrice;
  document.getElementById('showResult').textContent =
    `원래 가격: ${originalPrice}원, 할인율: ${discountRate}%, 할인 금액: ${savePrice}원, 최종 가격: ${resultPrice}원`;
}
