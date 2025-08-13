document.addEventListener('DOMContentLoaded', function() {
    feather.replace();

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
        if (ripple) ripple.remove();

        button.appendChild(circle);
    }

    document.querySelectorAll('.login-btn, .google-btn').forEach(button => {
        button.addEventListener('click', createRipple);
    });

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

    document.getElementById('googleSignIn').addEventListener('click', function() {
        const googleBtn = this;
        googleBtn.innerHTML = `<span class="animate-spin mr-2">↻</span> Connecting to Google...`;
        googleBtn.disabled = true;

        setTimeout(() => {
            googleBtn.innerHTML = '<img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05ebfd7c-4f5d-434a-8035-cd5431346bb7.png" alt="Google G logo" class="google-icon" /> Authentication successful!';
            googleBtn.style.color = '#10b981';
            googleBtn.style.borderColor = '#10b981';

            setTimeout(() => {
                alert('Google authentication successful! Redirecting to dashboard...');
            }, 1000);
        }, 1500);
    });
});
