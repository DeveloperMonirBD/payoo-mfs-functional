document.getElementById('add-money-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const inputAddMoney = document.getElementById('input-add-money').value;
  const inputPinNumber = document.getElementById('input-pin-number').value;
  
  // verify pin number :
  // Wrong way to validate pin number:
  if (inputPinNumber === '1234') {
    console.log('Adding money to your account');
  } else {
    alert( 'failed to add money! please, try again later')
  }

  // get the current balance :
  const balance = document.getElementById('balance').innerText;

  // addMoneyInput with balance :
  const addMoneyNumber = parseFloat(inputAddMoney);
  const balanceNumber = parseFloat(balance);

  const newBalance = balanceNumber + addMoneyNumber;
  console.log(newBalance)

  // update the balance in the UI/DOM
  document.getElementById('balance').innerText = newBalance;

});