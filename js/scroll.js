document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const scrollableContent = document.querySelector(".scrollable-content");

  scrollButton.addEventListener("click", function () {
    scrollableContent.scrollTop += 50; // Menggulir konten sebanyak 50 piksel (sesuaikan dengan kebutuhan Anda)
  });
});
