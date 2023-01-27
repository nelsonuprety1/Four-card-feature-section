const btn = document.getElementById('dark-mode-btn');
let isDarkMode = false;

btn.addEventListener('click', () => {
  if (isDarkMode) {
    document.body.style.backgroundColor = 'white';
    btn.innerText = 'Dark Mode';
    isDarkMode = false;
  } else {
    document.body.style.backgroundColor = 'black';
    btn.innerText = 'Light Mode';
    isDarkMode = true;
  }
});
