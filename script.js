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
