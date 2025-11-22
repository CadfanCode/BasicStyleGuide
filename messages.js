document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all message elements on the page
    const messages = document.querySelectorAll('.message');

    messages.forEach(message => {
        // 2. Create the close button element
        const closeButton = document.createElement('button');
        closeButton.className = 'message-close-btn';
        closeButton.innerHTML = '&times;'; // '×' symbol for a close icon
        closeButton.setAttribute('aria-label', 'Close message');

        // 3. Attach the dismissal logic
        closeButton.addEventListener('click', () => {
            // Find the closest parent with the class 'message' and hide it
            message.style.opacity = '0';
            setTimeout(() => {
                message.style.display = 'none';
            }, 300); // Wait for the opacity transition to finish
        });

        // 4. Append the close button to the message box
        message.appendChild(closeButton);
    });
});