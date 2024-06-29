document.addEventListener('DOMContentLoaded', () => {
  const signInBtnLink = document.querySelector('.signInBtn-link');
  const signUpBtnLink = document.querySelector('.signUpBtn-link');
  const signInForm = document.querySelector('.form-wrapper.sign-in');
  const signUpForm = document.querySelector('.form-wrapper.sign-up');

  signUpBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
  });

  signInBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
  });

  // Initialize by showing the sign-in form by default
  signInForm.classList.add('active');
});

