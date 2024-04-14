document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.icon');

    setTimeout(() => {
        document.querySelector('.icon-container').classList.add('show');
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('show');
            }, index * 100); // Animasi muncul bertahap setiap 100ms
        });
    }, 500); // Tunda animasi muncul selama 500ms
});
 