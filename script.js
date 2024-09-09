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
