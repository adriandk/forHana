document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('openBtn');
    const letterImage = document.querySelector('.letter-image');
    const letterPdf = document.querySelector('.letter-pdf');
    const letterText = document.querySelector('.letter-text');
    let isOpened = false;

    // Fungsi untuk memilih jenis content yang ingin ditampilkan
    function setLetterContent(type) {
        // Sembunyikan semua content
        letterImage.style.display = 'none';
        letterPdf.style.display = 'none';
        letterText.style.display = 'none';
        
        // Tampilkan content yang dipilih
        switch(type) {
            case 'image':
                letterImage.style.display = 'block';
                break;
            case 'pdf':
                letterPdf.style.display = 'block';
                break;
            case 'text':
            default:
                letterText.style.display = 'block';
                break;
        }
    }

    // Set default content untuk menampilkan PDF
    setLetterContent('pdf'); // Ubah ke PDF karena sudah ada file invitation.pdf

    openBtn.addEventListener('click', function() {
        if (!isOpened) {
            // Buka amplop
            envelope.classList.add('opened');
            openBtn.textContent = 'Tutup Amplop';
            isOpened = true;
        } else {
            // Tutup amplop
            envelope.classList.remove('opened');
            openBtn.textContent = 'Buka Amplop';
            isOpened = false;
        }
    });

    // Event listener untuk klik langsung pada amplop
    envelope.addEventListener('click', function() {
        openBtn.click();
    });

    // Efek hover tambahan
    envelope.addEventListener('mouseenter', function() {
        if (!isOpened) {
            envelope.style.transform = 'scale(1.05) rotateY(5deg)';
        }
    });

    envelope.addEventListener('mouseleave', function() {
        if (!isOpened) {
            envelope.style.transform = 'scale(1) rotateY(0deg)';
        }
    });
});