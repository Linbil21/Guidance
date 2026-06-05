function validateForm() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      var usernameError = document.getElementById("usernameError");
      var passwordError = document.getElementById("passwordError");

      usernameError.textContent = "";
      usernameError.style.borderColor = "";
      passwordError.textContent = "";
      passwordError.style.borderColor = "";

      var valid = true;

      if (username == "") {
        usernameError.textContent = "Student Number is required";
         usernameError.style.borderColor = "red";
        valid = false;
      }

      if (password == "") {
        passwordError.textContent = "Password is required";
        
        valid = false;
      }

       if (valid) {
        usernameError.textContent = "";
        passwordError.textContent = "Login successful";
        usernameError.style.borderColor = "green";
        passwordError.style.borderColor = "green";
        passwordError.classList.remove('error');
        passwordError.classList.add('success');
      }

      
       return valid;


    }
  