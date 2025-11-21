document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // Durasi animasi dalam milidetik
        easing: 'ease-out-cubic', // Tipe easing
        once: true, // Animasi hanya terjadi sekali saat scroll ke bawah
        offset: 100 // Offset trigger animasi
    });

    // Efek Hover pada Menu (Opsional - JS sederhana untuk interaksi)
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hapus kelas active dari semua link
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Tambah kelas active ke link yang diklik
            this.classList.add('active');
        });
    });

    // Simulasi data load (Opsional)
    console.log("Basketball Stats Loaded Successfully!");
});