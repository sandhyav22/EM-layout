function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('show');
    }


    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        // Simple client-side validation example
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const message = document.getElementById('message').value.trim();
        const notRobotCheckbox = document.getElementById('not-robot');

        if (!name || !email || !mobile || !message || !notRobotCheckbox.checked) {
            alert('Please fill in all required fields and confirm you are not a robot.');
            event.preventDefault(); // Prevent form submission
        } else {
            // In a real application, you would send this data to a server
            // alert('Form submitted successfully!');
            // You can add an AJAX call here to submit the form data
            // For now, let's just log it to console and prevent default submit
            console.log('Form Data:', { name, email, mobile, message });
            event.preventDefault(); // Prevent default submission for demo
        }
    });

    // You can also add more advanced validation or interactions here
    // For example, dynamic placeholder effects if you chose to use them instead of labels above inputs
});



 document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      // Demo login only
      if(username === "admin" && password === "admin123") {
        alert("Login successful!");
      } else {
        alert("Invalid username or password.");
      }
    });


    document.getElementById("registrationForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Registration Successful (demo only)");
    });


    document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.toggle-icon');
        answer.classList.toggle('active');
        icon.textContent = answer.classList.contains('active') ? '-' : '+';
    });
});


