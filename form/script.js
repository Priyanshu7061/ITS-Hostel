// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const ratingLabels = document.querySelectorAll('.rating-labels span');
    const ratingProgress = document.getElementById('ratingProgress');
    const ratingInput = document.getElementById('rating');

    // Add click event to rating labels
    ratingLabels.forEach(label => {
        label.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            ratingInput.value = value;
            ratingProgress.style.width = `${(value / 5) * 100}%`;
        });
    });

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Hide the form
        form.classList.add('hidden');

        // Show the thank you message
        thankYouMessage.classList.remove('hidden');

        // Optional: Send form data to a server
        /*
        const formData = new FormData(form);
        fetch('/submit-feedback', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */
    });
});