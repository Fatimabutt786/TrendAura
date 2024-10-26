const slider = document.querySelector('.slider');
const images = Array.from(slider.children);
const imageWidth = 250; // Adjust for image width + margin
let currentIndex = 0;


images.forEach((img) => {
  const clone = img.cloneNode(true);
  slider.appendChild(clone);
});

function slideImages() {
  currentIndex++;
  slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

  if (currentIndex === images.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentIndex = 0;
      slider.style.transform = 'translateX(0)';
    }, 500);

    
    setTimeout(() => {
      slider.style.transition = 'transform 0s linear';
    }, 600);
  }
}


setInterval(slideImages, 1500);
