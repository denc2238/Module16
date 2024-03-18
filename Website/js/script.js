document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registrationForm');
    var formGroups = document.querySelectorAll('.form-group');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        form.classList.add('slide-up');
      }
    });
  
    form.addEventListener('animationend', function() {
      form.classList.remove('slide-up');
      form.classList.add('slide-down');
      form.reset();
      setTimeout(function() {
        form.classList.remove('slide-down');
      }, 500);
    });
  
    formGroups.forEach(function(formGroup) {
      var input = formGroup.querySelector('input');
      input.addEventListener('focus', function() {
        formGroup.style.borderBottomColor = '#007bff';
      });
      input.addEventListener('blur', function() {
        formGroup.style.borderBottomColor = '#ccc';
      });
    });
  });
  
  function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    
    if (username == '' || password == '' || email == '') {
      document.getElementById('message').innerHTML = '<p id="error">Пожалуйста, заполните все обязательные поля.</p>';
      return false;
    }
    return true;
  }