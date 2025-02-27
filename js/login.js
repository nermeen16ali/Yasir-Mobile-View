document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");
  const toggleIcon = togglePassword.querySelector("img");

  togglePassword.addEventListener("click", function () {
    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";

    toggleIcon.src = isPassword
      ? "images/password-toggle.svg"
      : "images/password-toggle.svg";
    toggleIcon.alt = isPassword ? "Hide Password" : "Show Password";
  });
});

document.querySelectorAll(".close-all").forEach((button) => {
  button.addEventListener("click", function () {
    var modals = document.querySelectorAll(".modal.show");
    modals.forEach((modal) => {
      var bsModal = bootstrap.Modal.getInstance(modal);
      if (bsModal) bsModal.hide();
    });
  });
});

// let inputs = document.querySelectorAll(".otp-input");

// function moveNext(index) {
//   if (inputs[index].value.length === 1 && index < inputs.length - 1) {
//     inputs[index + 1].focus();
//   }
// }

// function movePrev(event, index) {
//   if (event.key === "Backspace" && index > 0 && inputs[index].value === "") {
//     inputs[index - 1].focus();
//   }
// }

// function getOTP() {
//   let otp = "";
//   inputs.forEach((input) => (otp += input.value));
//   console.log("OTP المدخل: " + otp);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const inputs = document.querySelectorAll(".otp-input");

//   inputs.forEach((input, index) => {
//     input.addEventListener("input", (e) => {
//       if (e.target.value.length === 1 && index < inputs.length - 1) {
//         inputs[index + 1].focus();
//       }
//     });

//     input.addEventListener("keydown", (e) => {
//       if (e.key === "Backspace" && index > 0 && !e.target.value) {
//         inputs[index - 1].focus();
//       }
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".otp-input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && index > 0 && !e.target.value) {
        inputs[index - 1].focus();
      }
    });

    input.addEventListener("keypress", (e) => {
      if (!/\d/.test(e.key)) {
        e.preventDefault(); // Prevent non-numeric characters
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const otpModal = document.getElementById("choice1Modal"); // استبدل بـ ID المودال الخاص بك
  const firstInput = document.querySelector(".otp-input");

  if (otpModal) {
    otpModal.addEventListener("shown.bs.modal", function () {
      if (firstInput) {
        firstInput.focus(); // جعل أول إدخال يأخذ التركيز فور فتح المودال
      }
    });
  }
});
