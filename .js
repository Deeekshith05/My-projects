document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');
    
    // Display a response message
    responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
    
    // Clear the form
    this.reset();
});
