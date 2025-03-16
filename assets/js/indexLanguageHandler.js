$(document).ready(function() {
  var langChangeButton = document.querySelector("#change-lang-btn");
  langChangeButton.innerHTML = "VN";
});

function changeLanguage() {
  const button = document.querySelector("#change-lang-btn");

  const languageContent = {
    VN: {
      aboutText: "Giới thiệu",
      apptHeaderText: "Đặt lịch",
      apptText: "Liên hệ trực tiếp để đặt lịch hẹn.",
      artWorksBtnTxt: "Xem Thêm",
      navContactText: "Liên hệ",
      contactText: "Liên hệ",
      locationText: "Địa chỉ",
      hoursText: "Giờ làm việc",
      timeText: "Hằng ngày: 10 giờ sáng - 7 giờ tối",
      priceHeaderTxt: "Bảng giá",
      pText: "100 ngàn cho 1 giờ",
      sloganText: "9th.studio một trong những tattoo shops đỉnh nhất đất Đà Thành."
    },
    Eng: {
      aboutText: "About",
      apptHeaderText: "Appointments",
      apptText: "Contact for booking!",
      artWorksBtnTxt: "Check out all artworks",
      navContactText: "Contact",
      contactText: "Contact",
      locationText: "Location",
      hoursText: "Open Hours",
      timeText: "Everyday: 10AM - 7PM",
      priceHeaderTxt: "Pricings",
      pText: "$100 for an hour",
      sloganText: "9th.studio is proud to be one of the best tattoo shops in Da Nang, Vietnam."
    }
  };

  button.innerHTML = button.innerHTML === "VN" ? "Eng" : "VN";

  var displayLanguage = button.innerHTML === "VN" ? "Eng" : "VN";

  const content = languageContent[displayLanguage];
  document.querySelector("#aboutText").innerHTML = content.aboutText;
  document.querySelector("#apptHeaderText").innerHTML = content.apptHeaderText;
  document.querySelector("#apptText").innerHTML = content.apptText;
  document.querySelector("#see-artworks").innerHTML = content.artWorksBtnTxt;
  document.querySelector("#navContactText").innerHTML = content.navContactText;
  document.querySelector("#contactText").innerHTML = content.contactText;
  document.querySelector("#locationText").innerHTML = content.locationText;
  document.querySelector("#hoursText").innerHTML = content.hoursText;
  document.querySelector("#timeText").innerHTML = content.timeText;
  document.querySelector("#priceHeaderText").innerHTML = content.priceHeaderTxt;
  document.querySelector("#pText").innerHTML = content.pText;
  document.querySelector("#sloganText").innerHTML = content.sloganText;
}
