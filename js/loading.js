document.addEventListener("DOMContentLoaded", function () {
  // Mengatur latar belakang halaman menjadi biru tua
  document.body.style.backgroundColor = "#1c1363"; // Ganti dengan warna biru tua yang diinginkan

  const loader = document.getElementById("loader");
  const img = loader.querySelector("img");

  // Fungsi untuk menyembunyikan animasi loading
  function hideLoader() {
    loader.style.display = "none";
  }

  // Fungsi untuk menampilkan animasi loading di tengah layar
  function showLoader() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const imgWidth = img.width;
    const imgHeight = img.height;

    const top = (windowHeight - imgHeight) / 2;
    const left = (windowWidth - imgWidth) / 2;

    loader.style.position = "fixed";
    loader.style.top = top + "px";
    loader.style.left = left + "px";
    loader.style.display = "block";
  }

  // Mulai menampilkan animasi loading
  showLoader();

  // Gantilah ini dengan kode yang mengatur kapan animasi loading selesai
  // Sebagai contoh, kami menggunakan setTimeout untuk menyembunyikan animasi setelah 3 detik.
  setTimeout(function () {
    hideLoader();
  }, 3000); // Mengubah angka 3000 sesuai dengan kebutuhan Anda
});
