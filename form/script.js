// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const ratingStars = document.querySelectorAll('.rating-stars span');
  const ratingInput = document.getElementById('rating');

  // Add click event to rating stars
  ratingStars.forEach(star => {
      star.addEventListener('click', function () {
          const value = this.getAttribute('data-value');
          ratingInput.value = value;

          // Highlight selected stars
          ratingStars.forEach(s => s.classList.remove('active'));
          this.classList.add('active');
          let prevSibling = this.previousElementSibling;
          while (prevSibling) {
              prevSibling.classList.add('active');
              prevSibling = prevSibling.previousElementSibling;
          }
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