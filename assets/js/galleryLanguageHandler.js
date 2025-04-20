function changeLanguage() {
    const button = document.querySelector("#change-lang-btn");

    const languageContent = {
        VN: {
          aboutText: "Giới thiệu",
          navContactText: "Liên hệ",
        },
        Eng: {
          aboutText: "About",
          navContactText: "Contact",
        }
      };

      button.innerHTML = button.innerHTML === "VN" ? "Eng" : "VN";
      var displayLanguage = button.innerHTML === "VN" ? "Eng" : "VN";

      const content = languageContent[displayLanguage];
      document.querySelector("#aboutText").innerHTML = content.aboutText;
      document.querySelector("#navContactText").innerHTML = content.navContactText;
}

window.addEventListener("load", () => {
  var langChangeButton = document.querySelector("#change-lang-btn");
  langChangeButton.innerHTML = "Eng";
  changeLanguage();
});

window.changeLanguage = changeLanguage;
