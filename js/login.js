document.getElementById('login-btn').addEventListener('click', function (e) {
  e.preventDefault();
  //get the phone number or pin number
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  //This is Temporary. you should not  do like this
  //validate phone or pin
  if (phoneNumber === '5' && pinNumber === '1234') {
    window.location.href = '/home.html';
  } else {
    alert('Worng Phone Number or Pin');
  }

});