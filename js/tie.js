document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const currentlyActiveButton = document.querySelector('.accordion-button.active');
        const isClickedButtonActive = button.classList.contains('active');

        if (currentlyActiveButton && currentlyActiveButton !== button) {
            currentlyActiveButton.classList.remove('active');
            currentlyActiveButton.nextElementSibling.style.maxHeight = 0;
        }

        if (!isClickedButtonActive) {
            button.classList.add('active');
            button.nextElementSibling.style.maxHeight = button.nextElementSibling.scrollHeight + 'px';
        } else {
            button.classList.remove('active');
            button.nextElementSibling.style.maxHeight = 0;
        }
    });
});

