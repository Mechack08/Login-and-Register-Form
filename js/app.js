const forms = document.querySelector(".forms"),
  showPassword = document.querySelectorAll(".eye"),
  links = document.querySelectorAll(".link");

showPassword.forEach((icon) => {
  icon.addEventListener("click", () => {
    let pwFields = icon.parentElement.parentElement.querySelectorAll(
      'input[name="password"]'
    );

    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
        return;
      }
      pwField.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    });
  });
});

const showAndHidePwd = () => {};

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    forms.classList.toggle("show-signup");
  });
});
