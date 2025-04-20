import { artistsData } from './data/artists.js';

// This code below registers the service worker
// Comment out for now since service worker does cache data and the next update may not
// be available for devices already accessed the web since the browser will use the cached
// data instead of the new data.
// Will bring this back once the web is fully developed.

// Actions to perform when the page is fully loaded
// window.addEventListener('load', () => {
//   // Check if the browser supports service workers
//   // If yes, attempt to register the service worker with the given script URL
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//       .register('/serviceWorker.js')
//       .then(registration => {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch(error => {
//         console.error('Service Worker registration failed:', error);
//       });
//   }
  
//   // Now that the page is fully load, play the video
//   const introvid = document.getElementById("intro-tattoo-show-video");
//   introvid.setAttribute("autoplay", "true");
//   introvid.play().catch(function(err) {
//     console.error("Error attempting to play video:", err);
//   })
// });


window.addEventListener('load', function() {
  initCarousel();
  hideLoader();
  pausePlayIntroVideo(false); // play intro video
});

window.addEventListener('scroll', function(){
  videoScroll();
});

$(document).ready(function() {
  pausePlayIntroVideo(true); // pause intro video until page content is fully loaded
});

document.addEventListener("DOMContentLoaded", () => {
  injectImagesToCarouselGallery();
  injectArtists();
});

/* Hide the loader when the page is loaded */
function hideLoader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) {
      return;
  }
  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";
  setTimeout(() => preloader.remove(), 700);

  if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
  }
};

function pausePlayIntroVideo(isPause) {
  const introVid = document.getElementById('intro-tattoo-show-video');
  if (isPause) {
    introVid.pause();
  } else {
    introVid.play();
  }
}

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

  // Create an IntersectionObserver to track visibility of the carousel
  const galeryObserver = new IntersectionObserver((entries, _) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the carousel is in view, enable autoplay
        swiper.autoplay.start();
      } else {
        // When the carousel is out of view, disable autoplay
        swiper.autoplay.stop();
      }
    });
  }, {
    // Only trigger when at lease 50% of the image is visible
    threshold: 0.5
  });

  // Start observing the carousel container
  const carouselElement = document.querySelector('.carousel-gallery');
  galeryObserver.observe(carouselElement);
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

/* Inject the images into the carousel gallery */
function injectImagesToCarouselGallery() {
  const imageUrls = Array.from({ length: 12 }, (_, i) =>
    `https://luantruong.sgp1.cdn.digitaloceanspaces.com/9th.studio/landing-page-tattoos/tat${i + 1}.jpg`
  );

  const wrapper = document.getElementById('carousel-wrapper');

  imageUrls.forEach((url) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <a href="${url}" data-fancybox="gallery">
        <div class="image" style="background-image: url(${url})">
          <div class="overlay">
            <em class="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    `;
    wrapper.appendChild(slide);
  });
};

/* Inject the artists to the artists section */
function injectArtists() {
  const initialLanguage = "Eng";
  const instagramIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
      <path
        d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
    </svg>`;
  const facebookIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
      <path
        d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" />
    </svg>`;

  const container = document.getElementById("artists-container");

  Object.entries(artistsData).forEach(([id, artist]) => {
    var hasInstagram = artist?.instagram && artist.instagram;
    var hasFacebook = artist?.facebook && artist.facebook;
  
    const div = document.createElement("div");
    const artistSocialPanel = `
      <div class="artist-socials">
        ${hasInstagram
            ? `<a href="${artist.instagram}" aria-label="Instagram" target="_blank">${instagramIcon}</a>`
            : ''}
        ${hasFacebook
            ? `<a href="${artist.facebook}" aria-label="Facebook" target="_blank">${facebookIcon}</a>`
            : ''}
      </div>
    `
    div.className = "artist-frame";
    div.innerHTML = `
      <img class="artist-photo" oncontextmenu="return false;" src="${artist.image}" alt="${artist.name}" />
      <!-- Currently commenting out the social media buttons. We will put this back later on. -->
      <!-- ${artistSocialPanel} -->
      <p id="${id}-name" class="bigger-text center artist-name">${artist.name}</p>
      <p id="${id}-title" class="artist-title center">${artist.title[initialLanguage]}</p>
      <p id="${id}-desc" class="artist-description">${artist.desc[initialLanguage]}</p>
    `;
    container.appendChild(div);
  });
};
