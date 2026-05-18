document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page script loaded.');

    const learnMoreBtn = document.querySelector('.hero .btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('You clicked "Learn More"! This is where you would navigate to another section or page.');
            // In a real application, you might scroll to a section or navigate to a new page
            // window.location.href = '#about';
        });
    }
});