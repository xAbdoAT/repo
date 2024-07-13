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

// Handle repo links
const repoUrl = 'https://abdo.is-a.dev/repo/';
const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (!link.classList.contains('social-link')) {
      // Check if the device supports the custom URL scheme
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      const isAndroid = /android/.test(userAgent);
      
      if (isIOS || isAndroid) {
        return;
      } else {
        e.preventDefault();
        navigator.clipboard.writeText(repoUrl).then(() => {
          alert('Repo URL copied to clipboard!');
        });
      }
    }
  });
});
