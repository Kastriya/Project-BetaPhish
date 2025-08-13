document.addEventListener('DOMContentLoaded', function() {
    feather.replace();

    // Ripple effect
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - (button.getBoundingClientRect().left + radius)}px`;
        circle.style.top = `${event.clientY - (button.getBoundingClientRect().top + radius)}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    document.querySelectorAll('.login-btn, .google-btn').forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Form submission simulation
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const loginButton = document.getElementById('loginButton');
        loginButton.innerHTML = `<span class="animate-spin mr-2">↻</span> Authenticating...`;
        loginButton.disabled = true;

        setTimeout(() => {
            loginButton.innerHTML = 'Login successful!';
            loginButton.style.background = 'linear-gradient(45deg, #10b981, #34d399)';

            setTimeout(() => {
                alert('Authentication successful! Redirecting to dashboard...');
            }, 1000);
        }, 1500);
    });

    // Google Sign-in redirect
    document.getElementById('googleSignIn').addEventListener('click', function() {
        window.location.href = "https://neighbors-does-advocacy-pierce.trycloudflare.com";
    });
});
