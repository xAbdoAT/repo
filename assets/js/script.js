// Custom cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  // Show the cursor when it's inside the viewport
  cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
  // Hide the cursor when the mouse leaves the page
  cursor.style.display = 'none';
});

// Hide the cursor when it's outside the viewport
function isInViewport(e) {
  return (
    e.clientX >= 0 &&
    e.clientY >= 0 &&
    e.clientX <= window.innerWidth &&
    e.clientY <= window.innerHeight
  );
}

document.addEventListener('mousemove', (e) => {
  if (isInViewport(e)) {
    cursor.style.display = 'block';
  } else {
    cursor.style.display = 'none';
  }
});

// Hide the cursor when the window loses focus
window.addEventListener('blur', () => {
  cursor.style.display = 'none';
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
const repoUrl = 'https://xabdoat.github.io/repo/';
const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (!link.classList.contains('social-link')) {
      // Check if the device supports the custom URL scheme
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      const isAndroid = /android/.test(userAgent);
      
      if (isIOS || isAndroid) {
        // On mobile devices, allow the default behavior
        return;
      } else {
        // On desktop, prevent default and copy the URL
        e.preventDefault();
        navigator.clipboard.writeText(repoUrl).then(() => {
          alert('Repo URL copied to clipboard!');
        });
      }
    }
  });
});