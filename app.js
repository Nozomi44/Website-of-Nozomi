const { exec } = require('child_process');

// Fungsi untuk menggerakkan layar dari titik (x1, y1) ke titik (x2, y2) dalam waktu t milliseconds
function swipe(x1, y1, x2, y2, t) {
    exec(`adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${t}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

// Contoh penggunaan: Menggerakkan layar dari (500, 1000) ke (500, 500) dalam waktu 500 milliseconds
swipe(500, 1000, 500, 500, 500);
