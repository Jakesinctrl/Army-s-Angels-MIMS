// Function for Student/Staff Login
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "Admin" && pass === "12345678") {
        // Save "session" so they don't get kicked out
        localStorage.setItem("isLoggedIn", "true");
        
        // Smooth Redirect
        document.body.style.opacity = "0";
        setTimeout(() => {
            // Check if they were going to staff or student
            // For now, let's just send them to staff.html
            window.location.href = "system_3rd_portal.html";
        }, 500);
    } else {
        document.getElementById('error').style.display = "block";
    }
}

// Function for Sign Up (Request Appointment)
function handleSignUp() {
    const email = document.getElementById('signup-email').value;
    if(email) {
        alert("Account Created Successfully!");
        window.location.href = "student.html"; // Go to dashboard after signup
    }
}