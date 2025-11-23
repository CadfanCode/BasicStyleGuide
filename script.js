const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '/') return; // allow home link

        e.preventDefault();

        fetch(href)
            .then(res => res.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(err => {
                document.getElementById('content').innerHTML = `<p>Error loading page: ${err}</p>`;
            });
    });
});

document.addEventListener("click", function(e) {
    if (e.target && e.target.id === "alert-button") {
        alert("This is an alert notification!");
    }
});