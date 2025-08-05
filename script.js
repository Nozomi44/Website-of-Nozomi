export function navigate(page) {
  const content = document.getElementById("main-content");
  if (page === "folder") content.innerHTML = "<h3>Folder Saya</h3>";
  if (page === "list") content.innerHTML = "<h3>List Saya</h3>";
  if (page === "add") content.innerHTML = `<h3>Tambah Kanji</h3><input placeholder='Kanji'><input placeholder='Arti'>`;
  if (page === "premium") window.location.href = "payment.html";
}
