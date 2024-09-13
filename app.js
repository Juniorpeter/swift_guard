// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: false,
    });

    // Your existing spinner code
    const spinner = document.getElementById('spinner');
    const content = document.getElementById('content');

    if (spinner) {
        spinner.style.display = 'block'; // Show spinner
    }

    setTimeout(function() {
        if (spinner) {
            spinner.style.display = 'none'; // Hide spinner
        }
        if (content) {
            content.style.display = 'block'; // Show content
        }
    }, 3000); // Simulate loading delay
});

window.onload = function() {
    var countryCodeSelect = document.getElementById('country-code');
    
    // Set the default country to UK
    countryCodeSelect.value = "+44";
    
    // Update the flag icon to match the default country
    var selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex];
    var flagIcon = document.getElementById('flag-icon');
    var flag = selectedOption.getAttribute('data-flag');
    flagIcon.className = 'flag-icon flag-icon-' + flag;
};

// Update flag when a different country is selected
document.getElementById('country-code').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var flagIcon = document.getElementById('flag-icon');

    var flag = selectedOption.getAttribute('data-flag');
    flagIcon.className = 'flag-icon flag-icon-' + flag;
});