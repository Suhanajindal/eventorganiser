// // Handle form submission for registration
// document.getElementById('registrationForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let event = document.getElementById('event').value;
//     alert(`Thank you ${name} for registering for ${event}! A confirmation has been sent to ${email}.`);
// });

// // Handle form submission for contact
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let name = document.getElementById('contactName').value;
//     let message = document.getElementById('message').value;
//     alert(`Thank you ${name} for reaching out! We have received your message: ${message}`);
// });

// // Function to show upcoming events
// function showEvents() {
//     alert('Upcoming Events:\n1. Event 1\n2. Event 2');
// }


document.querySelector('form').addEventListener('submit', function(event) {
    alert('Thank you for reaching out! We will get back to you soon.');
  });
  
