const btn = document.getElementById('dark-mode-btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document
    .querySelectorAll('.text-light')
    .forEach(el => el.classList.toggle('text-light'));
});

// const btn = document.getElementById('dark-mode-btn');
// let isDarkMode = false;

// btn.addEventListener('click', () => {
//   if (isDarkMode) {
//     document.body.style.backgroundColor = 'white';
//     btn.innerText = 'Dark Mode';
//     isDarkMode = false;
//   } else {
//     document.body.style.backgroundColor = 'black';
//     btn.innerText = 'Light Mode';
//     isDarkMode = true;
//   }
// });
