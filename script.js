// Get references to the theme toggle button and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply dark mode styles
function darkMode() {
    document.body.classList.add("dark-mode"); // Add dark mode class
    document.body.classList.remove("light-mode"); // Remove light mode class
}

// Function to apply light mode styles
function lightMode() {
    document.body.classList.add("light-mode"); // Add light mode class
    document.body.classList.remove("dark-mode"); // Remove dark mode class
}
// Event listener for when the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", (event) => {
    // Check local storage for the saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        darkMode(); // Apply dark mode if saved preference is dark
    } else {
        lightMode(); // Otherwise, apply light mode
    }
});

// Function to toggle between light and dark modes
function toggleTheme() {
    // Check if dark mode is currently applied
    if (document.body.classList.contains("dark-mode")) {
        lightMode(); // Switch to light mode
        localStorage.setItem("theme", "light"); // Save light mode preference
    } else {
        darkMode(); // Switch to dark mode
        localStorage.setItem("theme", "dark"); // Save dark mode preference
    }
}

// Add event listener to the theme toggle button to switch themes on click
themeToggle.addEventListener('click', toggleTheme);