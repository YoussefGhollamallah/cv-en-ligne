const h2 = document.querySelectorAll('h2');
const hr = document.querySelectorAll('hr');

h2.forEach((element) => {
    element.style.fontStyle = 'italic';
    element.style.textTransform = 'uppercase';
});

hr.forEach((element) => {
    element.style.border = '1px solid black';
    element.style.marginBottom = '15px';
});