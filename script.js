// Mencegah klik kanan
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Mencegah kombinasi keyboard F12 dan Ctrl+Shift+I
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
        return false;
    }
});

// mencegah shourcut control + s
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        alert('Cie mau copas.');
    }
});
