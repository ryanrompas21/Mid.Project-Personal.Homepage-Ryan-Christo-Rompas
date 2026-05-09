function copyText(id) {
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("Disalin!");
}

document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("typing");
    if (!target) return;

    const text = "Halo, Saya Ryan!";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            // MENGETIK
            target.innerHTML = text.substring(0, index + 1);
            index++;

            if (index === text.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000); // jeda sebelum hapus
                return;
            }

            setTimeout(typeEffect, 100); // kecepatan mengetik
        } else {
            // MENGHAPUS
            target.innerHTML = text.substring(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
                setTimeout(typeEffect, 500); // jeda sebelum ngetik lagi
                return;
            }

            setTimeout(typeEffect, 100); // kecepatan hapus (lebih cepat)
        }
    }

    typeEffect();
});

function revealOnScroll() {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 50) {
            el.classList.add("show");
        }
    });
}

// jalankan saat scroll
window.addEventListener("scroll", revealOnScroll);

// jalankan saat pertama load (biar langsung muncul kalau sudah di layar)
window.addEventListener("DOMContentLoaded", revealOnScroll);