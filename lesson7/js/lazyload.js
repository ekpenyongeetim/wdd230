let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 500px 0px'
}

const loadImages = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
        img.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                loadImages(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    imagesToLoad.forEach((image) => {
        observer.observe(image);
    });
} else {
    imagesToLoad.forEach((image) => {
        loadImages(image);
    });
}

/* intercection observer will only load images once the user scrolls to it
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  */