<?php
$users = [
    ['username' => 'angga', 'password' => 'angga'],
    ['username' => 'raihan', 'password' => 'raihan'],
    ['username' => 'rifki', 'password' => 'rifki'],
    ['username' => 'yasin', 'password' => 'yasin'],
    ['username' => 'yansen', 'password' => 'yansen'],
    ['username' => 'dias', 'password' => 'dias'],
    ['username' => 'sabina', 'password' => 'sabina'],
    ['username' => 'sifa', 'password' => 'sifa'],
    ['username' => 'widia', 'password' => 'widia'],
    ['username' => 'alfi', 'password' => 'alfi'],
    ['username' => 'dimas', 'password' => 'dimas'],
    ['username' => 'danti', 'password' => 'danti'],
    ['username' => 'syadah', 'password' => 'syadah'],
    ['username' => 'aini', 'password' => 'aini'],
    ['username' => 'sawitry', 'password' => 'sawitry'],
    ['username' => 'yudi', 'password' => 'yudi'],
    ['username' => 'rey', 'password' => 'rey'],
    ['username' => 'mujito', 'password' => 'mujito'],
    ['username' => 'poernomo', 'password' => 'poernomo'],
    ['username' => 'sulkhan', 'password' => 'sulkhan'],
    ['username' => 'riski', 'password' => 'riski'],
    ['username' => 'hufron', 'password' => 'hufron'],
    ['username' => 'arifin', 'password' => 'arifin'],
    ['username' => 'agung', 'password' => 'agung'],
];

// Menginisialisasi array riwayat login dari cookie
$loginHistory = [];
if (isset($_COOKIE['login_history'])) {
    $loginHistory = json_decode($_COOKIE['login_history'], true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $loggedIn = false;
    foreach ($users as $user) {
        if ($user['username'] === $username && $user['password'] === $password) {
            $loggedIn = true;
            break;
        }
    }

    // Menambahkan data riwayat login baru
    $loginHistory[] = [
        'username' => $username,
        'timestamp' => time(),
        'success' => $loggedIn,
    ];

    // Menyimpan riwayat login dalam cookie
    setcookie('login_history', json_encode($loginHistory), time() + 3600, '/');

    if ($loggedIn) {
        // Successful login
        setcookie("login_status", "loggedin", time() + 3600, "/");
        header('Location: loading.html'); // Redirect to index.html on successful login
        exit;
    } else {
        // Incorrect username or password
        header('Location:images/error.png'); // Redirect to the error image on failed login
        exit;
    }
}
?>
