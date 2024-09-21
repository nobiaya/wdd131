
const dateField = document.getElementsByClassName('current-year')[0];
const modified = document.getElementsByClassName('lastModified')[0];

dateField.innerText = new Date().getFullYear(); // Set current year
modified.innerText = 'Last Modification: ' + dayjs(new Date()).format('DD/MM/YYYY HH:MM:ss'); // Update last modification text
