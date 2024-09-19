document.getElementById('add-money-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const inputAddMoney = document.getElementById('input-add-money').value;
  const inputPinNumber = document.getElementById('input-pin-number').value;
  console.log(inputAddMoney, inputPinNumber);
});