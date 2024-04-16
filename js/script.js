document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Display the default section on page load
    document.getElementById('about').style.display = 'block';

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Remove "active" class from all tabs
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            // Add "active" class to the clicked tab
            this.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Display the target section
            document.getElementById(targetId).style.display = 'block';
        });
    });
});
