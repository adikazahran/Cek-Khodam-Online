document.addEventListener('DOMContentLoaded', () => {
    const storedHistory = localStorage.getItem('khodamHistory');
    if (storedHistory) {
        history = JSON.parse(storedHistory);
    }

    var typed = new Typed (".typed-text", {
        strings : ["Cek Khodam Online Mbah Dika"],
        typeSpeed : 100,
        backSpeed : 50,
        loop : true
    });
});

let previousName = "";
let history = [];

function checkKhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (name === "") {
        resultDiv.innerHTML = "<p style='color: yellow;'>Nama tidak boleh kosong!</p>";
        return;
    }

    if (name === previousName) {
        resultDiv.innerHTML = "<p style='color: yellow;'>Silakan ganti nama untuk cek lagi!</p>";
        return;
    } 

    previousName = name;
    resultDiv.innerHTML = "<div class='loader'></div>";

    setTimeout(() => {
        const khodamNames = [
            'Oli Gardan', 'Cacing Keremi', 'Tupai Texas', 'Belut listrik',
            'Nyamuk Racing', 'Cumi Balado', 'Keong Singit', 'Ayam Tiren',
            'Kadal Disko', 'Kuda Lumping', 'Serigala Bugil', 'Kelinci Ompong',
            'Kelinci Imut', 'Kodok Sawah', 'Alpukat Kocok'
        ];

        const khodamPresent = Math.random() > 0.1;

        if (khodamPresent) {
            const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
            resultDiv.innerHTML = `<p style='color: orange;'>${name}, kamu punya Khodam ${khodamName}!</p>`;
            history.push({ name: name, result: `Kamu punya Khodam ${khodamName}! ` });
        } else {
            resultDiv.innerHTML = `<p style='color: red;'>${name}, Khodam nya belum terlihat</p>`;
            history.push({ name: name, result: `Khodam nya belum terlihat` });
        }
        saveHistory();
    }, 1500);
}

function saveHistory() {
    localStorage.setItem('khodamHistory', JSON.stringify(history));
}
