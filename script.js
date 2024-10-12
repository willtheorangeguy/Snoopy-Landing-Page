const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function darkMode() {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
}

function lightMode() {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
}

window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("theme") === "dark") {
        darkMode();
    } else {
        lightMode();
    }
});


function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
        lightMode();
        localStorage.setItem("theme", "light");
    } else {
        darkMode();
        localStorage.setItem("theme", "dark");
    }
}
themeToggle.addEventListener('click', toggleTheme);