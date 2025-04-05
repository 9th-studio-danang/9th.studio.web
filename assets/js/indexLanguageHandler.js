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
      apptText: "Bạn có thể liên hệ với chúng tôi qua email hoặc mạng xã hội để đặt lịch hẹn.\
          <br/>\
          Khi đặt lịch, vui lòng cung cấp thông tin chi tiết về ý tưởng hình xăm của bạn,\
          bao gồm kích thước và vị trí trên cơ thể.\
          <br/>\
          Để có được sự chuẩn bị tốt nhất, vui lòng liên hệ trước vài ngày so với ngày xăm bạn\
          mong muốn.",
      artWorksBtnTxt: "Xem Thêm",
      artistsHeaderText: "Nghệ sĩ xăm",
      navContactText: "Liên hệ",
      contactText: "Liên hệ",
      locationText: "Địa chỉ",
      hoursText: "Giờ làm việc",
      timeText: "Thứ 2-Thứ 7: 10AM - 6PM<br/>Chủ nhật: Đóng cửa",
      priceHeaderTxt: "Bảng giá",
      pText: "Vui lòng liên hệ để biết thêm thông tin về giá cả. Giá có thể thay đổi tùy thuộc vào thiết kế, \
          kích thước và độ phức tạp của hình xăm. Chúng tôi sẽ báo giá cụ thể sau khi có đầy đủ thông tin.",
      sloganText: "Tại 9th.studio, chúng tôi sẽ biến ý tưởng của bạn thành những tác phẩm nghệ thuật sống động trên cơ thể."
    },
    Eng: {
      aboutText: "About",
      apptHeaderText: "Appointments",
      apptText: "Feel free to contact us via email or social media for appointment. Walk-ins are also welcome!\
          <br/>\
          To help us prepare for your appointment, please provide details about your tattoo idea,\
          including the size and placement on your body.\
          <br/>\
          For the best experience, we recommend reaching out a few days in advance of your preferred\
          appointment date.",
      artWorksBtnTxt: "See all of our artworks",
      navContactText: "Contact",
      artistsHeaderText: "Artists",
      contactText: "Contact",
      locationText: "Location",
      hoursText: "Open Hours",
      timeText: "Monday - Sunday: 10AM - 6PM<br/>Sunday: Closed",
      priceHeaderTxt: "Pricings",
      pText: "Please contact us for pricing. Prices may vary depending on the design, size, \
          and the complexity of the artwork. We will provide you with a quote once all details \
          are confirmed.",
      sloganText: "At 9th.studio, we transform your vision into living art, etched beautifully into the canvas of your skin."
    }
  };

  button.innerHTML = button.innerHTML === "VN" ? "Eng" : "VN";

  var displayLanguage = button.innerHTML === "VN" ? "Eng" : "VN";

  const content = languageContent[displayLanguage];
  document.querySelector("#aboutText").innerHTML = content.aboutText;
  document.querySelector("#apptHeaderText").innerHTML = content.apptHeaderText;
  document.querySelector("#apptText").innerHTML = content.apptText;
  document.querySelector("#see-artworks").innerHTML = content.artWorksBtnTxt;
  document.querySelector("#artists-header").innerHTML = content.artistsHeaderText;
  document.querySelector("#navContactText").innerHTML = content.navContactText;
  document.querySelector("#contactText").innerHTML = content.contactText;
  document.querySelector("#locationText").innerHTML = content.locationText;
  document.querySelector("#hoursText").innerHTML = content.hoursText;
  document.querySelector("#timeText").innerHTML = content.timeText;
  document.querySelector("#priceHeaderText").innerHTML = content.priceHeaderTxt;
  document.querySelector("#pText").innerHTML = content.pText;
  document.querySelector("#sloganText").innerHTML = content.sloganText;
}
