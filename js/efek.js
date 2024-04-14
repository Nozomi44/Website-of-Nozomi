// Daftar berita
const news = [
    "Berita pertama: Konten 1",
    "Berita kedua: Konten 2",
    "Berita ketiga: Konten 3",
    // Tambahkan berita lain di sini
  ];
  
  // Fungsi untuk menampilkan headline news
  function displayNews() {
    const newsList = document.getElementById('newsList');
  
    // Kosongkan daftar berita sebelum menambahkan yang baru
    newsList.innerHTML = '';
  
    // Tampilkan setiap berita dalam daftar
    news.forEach(function(newsItem, index) {
      const listItem = document.createElement('li');
      listItem.textContent = newsItem;
      listItem.addEventListener('click', function() {
        displayPopup(index);
      });
      newsList.appendChild(listItem);
    });
  }
  
  // Fungsi untuk menampilkan popup news
  function displayPopup(index) {
    const popup = document.getElementById('popupNews');
    const popupContent = document.getElementById('popupContent');
    
    popupContent.textContent = news[index]; // Tampilkan konten berita pada popup
  
    // Tampilkan popup
    popup.style.display = 'block';
  
    // Tutup popup setelah 5 detik
    setTimeout(function() {
      popup.style.display = 'none';
    }, 5000);
  }
  
  // Tampilkan headline news saat halaman dimuat
  displayNews();
  