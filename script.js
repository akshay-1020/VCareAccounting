document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.topnav a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Show the target section
            const targetId = this.getAttribute('data-target');
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetId) {
                    page.classList.add('active');
                }
            });
        });
    });
});