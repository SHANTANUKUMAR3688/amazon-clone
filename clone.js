const imgs = document.querySelectorAll('.header-slider ul li');
const prev_btn = document.querySelector('.btn-left');
const next_btn = document.querySelector('.btn-right');

let n = 0; // Start at the first image

// Function to update the display of the images based on the index `n`
function changeslide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; // Hide all images
    }
    imgs[n].style.display = 'block'; // Show the current image
}

// Initially show the first image
changeslide();

// Event listeners for the buttons
prev_btn.addEventListener('click', () => {
    if (n > 0) {
        n -= 1; // Go to the previous image if not on the first one
        changeslide();
    }
    // If on the first image, do nothing (do not go to the last image)
});

next_btn.addEventListener('click', () => {
    if (n < imgs.length - 1) {
        n += 1; // Go to the next image if not on the last one
        changeslide();
    }
    // If on the last image, do nothing (do not go to the first image)
});
