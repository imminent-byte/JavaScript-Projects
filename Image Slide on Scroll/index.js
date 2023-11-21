function debounce(func, timeout = 20){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e){
    // half way through the image
    sliderImages.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight - image.height / 2); 
        // bottom of the image
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const inNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && inNotScrolledPast){
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    })
  }

  window.addEventListener('scroll', debounce(checkSlide));


 