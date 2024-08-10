// script.js

// Get the modal element
var modal = document.getElementById("modal");

// Get the modal image element
var modalImg = document.getElementById("modal-img");

// Get all images and loop through them
var images = document.querySelectorAll(".gallery-item");
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Optional: close modal when clicking outside of the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}