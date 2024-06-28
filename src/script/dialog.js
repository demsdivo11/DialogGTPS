function addBackgroundImage() {
    const elements = document.querySelectorAll('#icon');
    elements.forEach(element => {
        const classes = element.className.split(' ');
        classes.forEach(className => {
            if (className.startsWith('icon-')) {
                const itemID = className.substring(5);
                const imageUrl = `./src/assets/items/${itemID}.png`;
                element.style.backgroundImage = `url(${imageUrl})`;
                console.log(`Set background image for ${element.tagName} with itemID ${itemID}: ${imageUrl}`);
            }
        });
    });
}

// Panggil fungsi pertama kali saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    addBackgroundImage();
});

// Event listener untuk menangani penambahan elemen baru dengan kelas "icon-[itemID]"
document.addEventListener('DOMNodeInserted', function(event) {
    const addedNode = event.target;
    if (addedNode instanceof Element && addedNode.id == "icon") {
        addBackgroundImage();
    }
});
