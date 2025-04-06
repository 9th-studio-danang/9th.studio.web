// Check if the browser supports service workers
// if ('serviceWorker' in navigator) {
//   // Wait for the window to load fully before registering the service worker
//   window.addEventListener('load', () => {
//       // Attempt to register the service worker with the given script URL
//       navigator.serviceWorker.register('/serviceWorker.js')
//           .then(registration => {
//               console.log('Service Worker registered with scope:', registration.scope);
//           })
//           .catch(error => {
//               console.error('Service Worker registration failed:', error);
//           });
//   });
// }

window.addEventListener('load', function() {
  videoScroll();
  initCarousel();
});
window.addEventListener('scroll', videoScroll);

// Function to transform the social chat buttons
$(document).ready(function() {

  // activeX = true ==> EXPAND
  // activeX = false ==> COLLAPSE
  var active1 = false;
  var active2 = false;
  var active3 = false;

  $('.social-chat-container').on('click', function() {
    if (!active1){
      $(this).find('.facebook-box').css({
        'background-color': '#0099FF',
        'transform': 'translate(0px, -125px)',
      });
    } else{
      $(this).find('.facebook-box').css({
        'background-color': 'gray',
        'transform': 'none'
      });
    }

    if (!active2){
      $(this).find('.instagram-box').css({
        'background': 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)',
        'transform': 'translate(-78px, -85px)'
      });
    } else{
      $(this).find('.instagram-box').css({
        'background-color': 'gray',
        'transform': 'none'
      });
    }

    if (!active3){
      $(this).find('.mail-box').css({
        'background-color': '#a10101',
        'transform': 'translate(-120px, 0px)'
      });
    } else{
      $(this).find('.mail-box').css({
        'background-color': 'gray',
        'transform': 'none'
      });
    }

    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
  });
});

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
