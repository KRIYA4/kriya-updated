import $ from "jquery";
import emailjs from "@emailjs/browser";

function main() {
  if (window.location.hash !== "") {
    var hash = window.location.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      10,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }

  emailjs.init("01DlQMo7YXA1eJ9mz");

  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
}

export default main;
