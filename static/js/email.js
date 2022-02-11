(function () {
  emailjs.init("user_iIvXkBLH666mYU0g9CoKF");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_yd0nwab";
    const templateID = "template_gwncmd2";

    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("Success!", response.status, response.text);
        alert(
          "Uspješno poslan email!\nOdgovoriti ću Vam što brže je moguće.\nHvala :)"
        );
      },
      (error) => {
        console.log("Greška!", error);
        alert(
          "Greška: Mail nije poslan. \nUkoliko se problem pojavljuje kontaktirajte me direktno na mail: \nvisnjicmatej@gmail.com"
        );
      }
    );
  });
