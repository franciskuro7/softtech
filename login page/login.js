
const btn = document.querySelector('button');
btn.addEventListener('click', function submit(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const name = document.getElementById('password').value;

  if (name === '' || email === '') {
  
    alert('your password or email is incorrect.');
    return;
  }else if(name.length > 0 || email.length > 0) {
    alert('Form Submitted!');
    return;
  }
});