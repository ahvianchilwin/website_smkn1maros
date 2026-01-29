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
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
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
