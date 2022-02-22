(function () {
  emailjs.init("user_iIvXkBLH666mYU0g9CoKF");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const serviceID = "service_yd0nwab";
    const templateID = "template_gwncmd2";
    document.getElementById("sendBtn").hidden = true;
    document.getElementById("contactFormWindow").hidden = true;
    document.getElementById("email").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("Success!", response.status, response.text);
        alert(
          "Uspješno poslan email!\nOdgovoriti ću Vam što brže je moguće.\nHvala :)"
        );
        //document.getElementById("sendBtn").disabled = true;
        // document.getElementById("email").value = "";
        // document.getElementById("fullname").value = "";
        // document.getElementById("subject").value = "";
        // document.getElementById("message").value = "";
      },
      (error) => {
        console.log("Greška!", error);
        alert(
          "Greška: Mail nije poslan! \nUkoliko se problem opet pojavljuje kontaktirajte me direktno na email: \nvisnjicmatej@gmail.com"
        );
      }
    );
  });
