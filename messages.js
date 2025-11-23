// Example JS to dynamically show messages
function showMessage(type, text) {
    const container = document.querySelector('.content-container');
    const div = document.createElement('div');
    div.classList.add('message', type);

    // Include warning icon for error messages
    if (type === 'error') {
        div.innerHTML = `<p>⚠️ ${text}</p>`;
    } else {
        div.innerHTML = `<p>${text}</p>`;
    }

    container.prepend(div);

    // Auto-hide after 5 seconds
    setTimeout(() => div.remove(), 5000);
}
