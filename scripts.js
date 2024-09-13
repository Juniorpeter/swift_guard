// news carousel
$(".news-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav : false,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
});


document.getElementById('country-code').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var flagIcon = document.getElementById('flag-icon');

    // Get the data-flag attribute from the selected option
    var flag = selectedOption.getAttribute('data-flag');

    // Update the flag icon class
    flagIcon.className = 'flag-icon flag-icon

    window.addEventListener('scroll', reveal);

    function reveal(){
        var reaveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reaveals.length; i++){

            var windowheight = window.innerHeight;
        }
    }

    // script.js

document.addEventListener("DOMContentLoaded", function() {
    // Show the spinner
    const spinner = document.getElementById('spinner');
    const content = document.getElementById('content');

    spinner.style.display = 'block';

    // Simulate content loading with a delay (e.g., fetching data)
    setTimeout(function() {
        // Hide the spinner after content loads
        spinner.style.display = 'none';

        // Show the content
        content.style.display = 'block';
    }, 3000); // Replace with actual content loading time or condition
});