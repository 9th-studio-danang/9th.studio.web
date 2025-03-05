window.addEventListener('load', function() {
  videoScroll();
  initCarousel();
});
window.addEventListener('scroll', videoScroll);

// Initialize the carousel gallery
function initCarousel() {
  var swiper = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    pagination: {
      el: '.carousel-gallery .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      // when window width is > 992px
      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
}

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
  
  const languageContent = {
    VN: {
      aboutText: "Giới thiệu",
      apptHeaderText: "Đặt lịch",
      apptText: "Liên hệ trực tiếp để đặt lịch hẹn.",
      artWorksBtnTxt: "Xem toàn bộ hình xăm",
      navContactText: "Liên hệ",
      contactText: "Liên hệ",
      locationText: "Địa chỉ",
      hoursText: "Giờ làm việc",
      timeText: "Hằng ngày: 10 giờ sáng - 7 giờ tối",
      priceHeaderTxt: "Bảng giá",
      pText: "100 ngàn cho 1 giờ",
      sloganText: "9th.studio một trong những tattoo shops đỉnh nhất Đà Thành."
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
