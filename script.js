// Navbar
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".hero");

window.addEventListener('scroll', function() {
    
    const triggerHeight = heroSection.offsetHeight - 100;

    if (window.scrollY > triggerHeight) {
        navbar.classList.add("scrolled"); 
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Foto
const images =
document.querySelectorAll('.row img');
const lightbox =
document.getElementById('lightbox');
const lightboxImg =
document.getElementById('lightbox-img');
const caption =
document.getElementById('data-caption');
const closeBtn =
document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        caption.textContent = img.dataset.caption;    
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';    
});

lightbox.addEventListener('click', (e) => {
    if (e.taget === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Video
var elements = document.getElementsByClassName("video-item");

var i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}
