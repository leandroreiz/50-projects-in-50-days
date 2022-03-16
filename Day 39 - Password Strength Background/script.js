const passwordInput = document.getElementById('password');
const background = document.querySelector('.background');

const checkPasswordStrength = (e) => {
  const length = e.target.value.length;
  const blurValue = 20 - length * 2;

  background.style.filter = `blur(${blurValue}px)`;
};

passwordInput.addEventListener('keypress', checkPasswordStrength);
