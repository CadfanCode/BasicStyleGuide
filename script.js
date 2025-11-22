const links = document.querySelectorAll('nav a');
const hemLink = document.querySelector('a[href="pages/index.html"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link === hemLink) {
        } else {
            e.preventDefault();

            fetch(link.getAttribute('href'))
                .then(res => res.text())
                .then(html => {
                    document.getElementById('content').innerHTML = html;
                })
                .catch(err => {
                    document.getElementById('content').innerHTML = `<p>Error loading page: ${err}</p>`;
                });
        }
    });
});
