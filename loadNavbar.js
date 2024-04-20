document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('navbar-placeholder').innerHTML = html;
      })
      .catch(err => console.warn('Something went wrong.', err));
  });
  