<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $pesan = $_POST["pesan"];
    
    // Anda dapat menggunakan fungsi mail() untuk mengirim email
    $tujuan = "wearenozomi0@gmail.com";
    $judul = "Pesan dari $nama";
    $isi_pesan = "Dari: $nama\nEmail: $email\n\nPesan:\n$pesan";
    
    mail($tujuan, $judul, $isi_pesan);

    // Redirect pengguna kembali ke halaman sebelumnya atau halaman konfirmasi
    header("Location: index.html");
}
?>
