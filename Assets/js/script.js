// Custom cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Dark/Light mode toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode') 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Loading animation
window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');
  loading.style.display = 'none';
});

// Click-to-copy repo URL
const repoUrl = 'https://xabdoat.github.io/repo/';
const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (!link.classList.contains('social-link')) {
      e.preventDefault();
      navigator.clipboard.writeText(repoUrl).then(() => {
//        alert('Repo URL copied to clipboard!');
      });
    }
  });
});