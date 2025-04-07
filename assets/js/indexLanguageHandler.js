import { artistsData } from './data/artists.js';

var contentMap = {
  "#aboutText": {
    VN: "Giới thiệu",
    Eng: "About"
  },
  "#apptHeaderText": {
    VN: "Đặt lịch",
    Eng: "Appointments"
  },
  "#apptText": {
    VN: "Bạn có thể liên hệ với chúng tôi qua email hoặc mạng xã hội để đặt lịch hẹn.\
        <br/>\
        Khi đặt lịch, vui lòng cung cấp thông tin chi tiết về ý tưởng hình xăm của bạn,\
        bao gồm kích thước và vị trí trên cơ thể.\
        <br/>\
        Để có được sự chuẩn bị tốt nhất, vui lòng liên hệ trước vài ngày so với ngày xăm bạn\
        mong muốn.",
    Eng: "Feel free to contact us via email or social media for appointment. Walk-ins are also welcome!\
        <br/>\
        To help us prepare for your appointment, please provide details about your tattoo idea,\
        including the size and placement on your body.\
        <br/>\
        For the best experience, we recommend reaching out a few days in advance of your preferred\
        appointment date."
  },
  "#see-artworks": {
    VN: "Xem Thêm",
    Eng: "See all of our artworks"
  },
  "#artists-header": {
    VN: "Nghệ sĩ xăm",
    Eng: "Artists"
  },
  "#navContactText": {
    VN: "Liên hệ",
    Eng: "Contact"
  },
  "#contactText": {
    VN: "Liên hệ",
    Eng: "Contact"
  },
  "#locationText": {
    VN: "Địa chỉ",
    Eng: "Location"
  },
  "#hoursText": {
    VN: "Giờ làm việc",
    Eng: "Open Hours"
  },
  "#timeText": {
    VN: "Thứ 2 - Chủ Nhật: 10AM - 6PM",
    Eng: "Monday - Sunday: 10AM - 6PM"
  },
  "#priceHeaderText": {
    VN: "Bảng giá",
    Eng: "Pricings"
  },
  "#pText": {
    VN: "Vui lòng liên hệ để biết thêm thông tin về giá cả. Giá có thể thay đổi tùy thuộc vào thiết kế, \
        kích thước và độ phức tạp của hình xăm. Chúng tôi sẽ báo giá cụ thể sau khi có đầy đủ thông tin.",
    Eng: "Please contact us for pricing. Prices may vary depending on the design, size, \
        and the complexity of the artwork. We will provide you with a quote once all details \
        are confirmed."
  },
  "#sloganText": {
    VN: "Tại 9th.studio, chúng tôi sẽ biến ý tưởng của bạn thành những tác phẩm nghệ thuật sống động trên cơ thể.",
    Eng: "At 9th.studio, we transform your vision into living art, etched beautifully into the canvas of your skin."
  }
};

// Dynamically add content for artists to contentMap
Object.entries(artistsData).forEach(([id, artist]) => {
  contentMap[`#${id}-title`] = {
    VN: artist.title.VN,
    Eng: artist.title.Eng
  };
  contentMap[`#${id}-desc`] = {
    VN: artist.desc.VN,
    Eng: artist.desc.Eng
  };
});

$(document).ready(function() {
  var langChangeButton = document.querySelector("#change-lang-btn");
  langChangeButton.innerHTML = "Eng";
  changeLanguage();
});

function changeLanguage() {
  const button = document.querySelector("#change-lang-btn");

  button.innerHTML = button.innerHTML === "VN" ? "Eng" : "VN";
  var displayLanguage = button.innerHTML === "VN" ? "Eng" : "VN";

  for (const content in contentMap) {
    const element = document.querySelector(content);
    if (element) {
      element.innerHTML = contentMap[content][displayLanguage];
    }
  }
}
window.changeLanguage = changeLanguage;
