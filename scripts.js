document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', () => {
            const techList = button.nextElementSibling;
            techList.style.display = techList.style.display === 'none' ? 'block' : 'none';
            button.textContent = techList.style.display === 'none' ? 'Show Technologies' : 'Hide Technologies';
        });
    });
});
