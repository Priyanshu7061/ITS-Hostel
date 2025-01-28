document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value.trim();
  
    // Simple validation
    if (!name || !email || !rating) {
      displayMessage('Please fill out all required fields!', 'error');
      return;
    }
  
    // Display a success message
    displayMessage('Thank you for your feedback!', 'success');
  
    // Reset form
    document.getElementById('feedbackForm').reset();
  });
  
  function displayMessage(message, type) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    responseMessage.style.color = type === 'success' ? 'green' : 'red';
  }
  