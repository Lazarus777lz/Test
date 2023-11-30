const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

function validateEmail() {
  const email = emailInput.value;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = 'Invalid email format';
    emailError.style.display = 'block';
    return false;
  }

  emailError.style.display = 'none';
  return true;
}

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', function () {
  emailError.textContent = '';
  emailError.style.display = 'none';
});