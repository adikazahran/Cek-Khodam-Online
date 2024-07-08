document.addEventListener('DOMContentLoaded', () => {
    const history = JSON.parse(localStorage.getItem('khodamHistory')) || [];
    const historyList = document.getElementById('historyList');

    const renderHistory = () => {
        historyList.innerHTML = ''; // Kosongkan isi ul terlebih dahulu

        if (history.length === 0) {
            historyList.innerHTML = "<li>Tidak ada riwayat cek khodam.</li>";
        } else {
            history.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name}: ${item.result}`;
 
                // Tambahkan tombol delete
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    deleteHistoryItem(index);
                });

                listItem.appendChild(deleteButton);
                historyList.appendChild(listItem);
            });
        }
    };

    const deleteHistoryItem = (index) => {
        history.splice(index, 1); // Hapus item dari array
        localStorage.setItem('khodamHistory', JSON.stringify(history)); // Update local storage
        renderHistory(); // Render ulang riwayat setelah menghapus
    };

    renderHistory(); // Render riwayat pertama kali
});
