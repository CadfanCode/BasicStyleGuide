const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '/') {
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

function alertDemoFunction() {
    document.getElementById("alert-btn").addEventListener("click",function() {
        alert("This is an alert notification!");
    });
}