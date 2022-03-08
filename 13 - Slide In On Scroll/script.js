const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(e) {
    console.log(e)
    sliderImages.forEach(img => {
        // Bottom of view - half the image height (eg. the middle of image)
        const slideInAt = (window.scrollY + window.innerHeight) - (img.height / 2);
        // Bottom of Image
        const imageBottom = img.offsetTop + img.height;

        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        (isHalfShown && isNotScrolledPast)
            ? img.classList.add('active')
            : img.classList.remove('active');
    });
}

window.addEventListener('scroll', debounce(checkSlide));