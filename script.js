window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
/** 
 * Function to play video when user scrolls to it, and stop the video
 * when the user scrolls out.
 */
function videoScroll() {
  if (document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight;
    var videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i];
      var videoHeight = thisVideoEl.clientHeight;
      var videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (videoClientRect <= (windowHeight - (videoHeight*.5)) && videoClientRect >= (0 - (videoHeight*.5))) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}

function changeLanguage() {
  const button = document.querySelector("#changeLanguageBtn");
  const aboutText = document.querySelector("#aboutText");
  const apptHeaderText = document.querySelector("#apptHeaderText");
  const contactText = document.querySelector("#contactText");
  const navContactText = document.querySelector("#navContactText");
  const locationText = document.querySelector("#locationText");
  const priceHeaderTxt = document.querySelector("#priceHeaderText");
  const hoursText = document.querySelector("#hoursText");
  const timeText = document.querySelector("#timeText");
  const sloganText = document.querySelector("#sloganText");
  const artWorksBtnTxt = document.querySelector("#see-artworks");

  button.innerHTML = button.innerHTML === "VN" ? "Eng" : "VN";

  if (button.innerHTML !== "VN") {
    aboutText.innerHTML = "Giới thiệu";
    apptHeaderText.innerHTML = "Đặt lịch";
    apptText.innerHTML = "Liên hệ trực tiếp để đặt lịch hẹn."
    artWorksBtnTxt.innerHTML = "Xem Thêm";
    navContactText.innerHTML = "Liên hệ";
    contactText.innerHTML = "Liên hệ";
    locationText.innerHTML = "Địa chỉ";
    hoursText.innerHTML = "Giờ làm việc";
    timeText.innerHTML = "Hằng ngày: 10 giờ sáng - 7 giờ tối";
    priceHeaderTxt.innerHTML = "Bảng giá";
    pText.innerHTML = "100 ngàn cho 1 giờ";
    sloganText.innerHTML = "9th.studio một trong những tattoo shops đỉnh nhất đất Đà Thành.";
  }
  
  else {
    aboutText.innerHTML = "About";
    apptHeaderText.innerHTML = "Appointments";
    apptText.innerHTML = "Contact for booking!"
    artWorksBtnTxt.innerHTML = "Check out all artworks";
    navContactText.innerHTML = "Contact";
    contactText.innerHTML = "Contact";
    locationText.innerHTML = "Location";
    hoursText.innerHTML = "Open Hours";
    timeText.innerHTML = "Everyday: 10AM - 7PM";
    priceHeaderTxt.innerHTML = "Pricings";
    pText.innerHTML = "$100 for an hour";
    sloganText.innerHTML = "9th.studio is proud to be one of the best tattoo shops in Da Nang, Vietnam.";
  }
}