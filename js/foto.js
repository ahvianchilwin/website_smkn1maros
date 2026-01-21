function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

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