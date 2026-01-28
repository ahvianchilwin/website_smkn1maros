// Ambil elemen navbar dan hero section
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".hero");

window.addEventListener('scroll', function() {
    // 1. Cek berapa tinggi Hero Section saat ini
    // Kita kurangi 100px agar transisinya mulai SESAAT sebelum benar-benar lewat (supaya lebih mulus)
    const triggerHeight = heroSection.offsetHeight - 100;

    // 2. Jika scroll sudah melewati batas tinggi hero...
    if (window.scrollY > triggerHeight) {
        navbar.classList.add("scrolled"); // Ubah jadi putih/biru
    } else {
        navbar.classList.remove("scrolled"); // Kembalikan jadi transparan
    }
});