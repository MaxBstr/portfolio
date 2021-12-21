/* swiper conf */
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


/* smooth transition */
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

/* typed conf */

var typed = new Typed("#typed", {
  strings: ["Web developer", "Python developer", "Backend developer", "DevOps engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  showCursor: true,
  smartBackspace: true,
  backDelay: 400
});

/* local storage */
function update_counter() {
  var n = localStorage.getItem('CV_checked');
 
  if (n === null) {
      n = 0;
  }
  n++;
   
  localStorage.setItem("CV_checked", n);
  document.getElementById('counter').innerHTML = n;
}

document.getElementById('CV').addEventListener('click', update_counter);

CV_counter = document.getElementById('counter');
var count = localStorage.getItem('CV_checked');
CV_counter.innerHTML = (count === null) ? 0 : count;