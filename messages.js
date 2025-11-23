function showMessage(type, text) {
    const container = document.querySelector('.content-container');
    if (!container) return;

    const div = document.createElement('div');
    div.classList.add('message', type);

    // Add icon based on type
    let icon = '';
    switch (type) {
        case 'info':
            icon = 'ℹ️';
            break;
        case 'success':
            icon = '✔️';
            break;
        case 'warning':
            icon = '⚠️';
            break;
        case 'error':
            icon = '❌';
            break;
        default:
            icon = '';
    }

    div.innerHTML = `<p>${icon} ${text}</p>`;
    container.prepend(div);

    // Auto-hide message after 5 seconds
    setTimeout(() => {
        div.remove();
    }, 5000);
}
