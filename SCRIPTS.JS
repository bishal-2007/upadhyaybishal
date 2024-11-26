// Function for uploading and displaying images
function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imgElement.classList.add("uploaded-image");
            document.getElementById("imageContainer").appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});
