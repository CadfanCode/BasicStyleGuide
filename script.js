const links = document.querySelectorAll('nav a');
const content = document.getElementById('content');

links.forEach(link => {
    link.addEventListener('click', () => {
        fetch(link.getAttribute('href'))
            .then(res => res.text())
            .then(html => {
                content.innerHTML = html;
            })
            .catch(err => {
                content.innerHTML = `<p>Error loading page: ${err}</p>`;
            });
    });
});
