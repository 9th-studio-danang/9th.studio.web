/* Hide the loader when the page is loaded */
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (!preloader) {
        return;
    }
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
    setTimeout(() => preloader.remove(), 700);
});
