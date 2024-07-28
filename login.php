<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Gantikan dengan logika verifikasi pengguna yang sebenarnya
  if ($username === 'admin' && $password === 'password') {
    echo json_encode(['status' => 'success']);
  } else {
    echo json_encode(['status' => 'fail']);
  }
} else {
  echo json_encode(['status' => 'fail']);
}
?>
