<?php
// Informasi koneksi database
$host = 'localhost';
$dbname = 'id21404510_wp_8d329d261892dc04f00440281a5af39e';
$username = 'id21404510_wp_8d329d261892dc04f00440281a5af39e';
$password = '_Kurumi44';

try {
    // Buat koneksi ke database menggunakan PDO
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Set mode error untuk melihat kesalahan dengan jelas
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ambil data dari form
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Securely hash the password
    $email = $_POST['email'];

    // Query untuk memasukkan data pengguna ke dalam tabel
    $query = "INSERT INTO users (username, password, email) VALUES (:username, :password, :email)";
    $stmt = $db->prepare($query);

    // Bind parameter
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':email', $email);

    // Eksekusi query
    $stmt->execute();

    // Berhasil mendaftar
    echo "Pendaftaran berhasil. Silakan login.";

} catch (PDOException $e) {
    // Tangani kesalahan jika terjadi
    echo "Pendaftaran gagal: " . $e->getMessage();
}
?>
