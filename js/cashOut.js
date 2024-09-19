document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();
    const CashOutAmount = +document.getElementById('cash-out-amount').value;
    const pinNumber = +document.getElementById('input-cash-out-pin').value;
    
  // wrong way to verify pin number:
  if (pinNumber === 1234) {
    const balance = +document.getElementById('balance').innerText;
    
    //reduce the balance:
    const newBalance = balance - CashOutAmount;
    document.getElementById('balance').innerText = newBalance;

  } else {
    alert('Failed to cash out. please try again later.')
  }
});
