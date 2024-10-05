// This displays the current year in footer
const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// This display the last modified date and time in DD/MM/YYYY HH:MM:SS format
const lastModifiedElement = document.getElementById("lastModified");
const lastModifiedDate = new Date(document.lastModified);

// Date Formate DD/MM/YYYY
const day = String(lastModifiedDate.getDate()).padStart(2, '0');
const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const year = lastModifiedDate.getFullYear();

// Time Format HH:MM:SS
const hours = String(lastModifiedDate.getHours()).padStart(2, '0');
const minutes = String(lastModifiedDate.getMinutes()).padStart(2, '0');
const seconds = String(lastModifiedDate.getSeconds()).padStart(2, '0');

// This Combine date and time in desired format
lastModifiedElement.textContent = `Last modified: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

