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

// Testimoni
// --- TESTIMONIAL SLIDER ---
const testiContainer = document.getElementById('testimonialContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Fungsi Tombol Kanan
nextBtn.addEventListener('click', () => {
    testiContainer.scrollBy({
        left: 340, // Geser sejauh 340px (lebar kartu + gap)
        behavior: 'smooth'
    });
});

// Fungsi Tombol Kiri
prevBtn.addEventListener('click', () => {
    testiContainer.scrollBy({
        left: -340, // Geser balik ke kiri
        behavior: 'smooth'
    });
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
            const itemCategory = item.getAttribute('data-category');

            if (filterValue === 'all' || itemCategory.includes(filterValue)) {
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

// Tombol Ke Atas
const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener('scroll', function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 300) {
        toTopBtn.classList.add("active");
    } else {
        toTopBtn.classList.remove("active");
    }
});

toTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});