var afterHeader = document.querySelector('header');
var noteContainer = document.createElement('div');

var sidebar = document.querySelectorAll('div')[22];
var buttonContainer = document.createElement('div');

buttonContainer.style.position = 'relative';
buttonContainer.style.zIndex = '2';
buttonContainer.style.paddingBottom = '1%';

noteContainer.style.position = 'relative';
noteContainer.style.zIndex = '2';
noteContainer.style.paddingBottom = '1%';

var sideNote = document.createElement('h4');
sideNote.innerText = "Note: If selected check box dissapears, Don't worry you can hit 'Download Post' and they will get downloaded.";

sideNote.style.border = "1px solid";
sideNote.style.padding = "1%";
sideNote.style.borderColor = "#ff3040";
sideNote.style.borderRadius = "5px";
sideNote.style.width = "65%";

noteContainer.appendChild(sideNote);

if (afterHeader != null) {
    afterHeader.insertAdjacentElement('afterend', noteContainer);
} else {
    console.log("Trying to append...");
}

var button = document.createElement('button');
button.type = 'button';
button.id = 'downloadBtn';
button.textContent = 'Download Posts';
button.title = 'Download';
button.value = 'button';

button.style.height = '32px';
button.style.width = '100%';
button.style.cursor = 'pointer';
button.style.backgroundColor = '#363636';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.fontSize = '14px';
button.style.fontWeight = '600';
button.style.padding = "7px 16px";
button.style.cursor = 'pointer';

var breakLine = document.createElement('br');
var breakLine2 = document.createElement('br');

var button2 = document.createElement('button');
button2.type = 'button';
button2.id = 'profownloadBtn';
button2.textContent = 'Download Profile';
button2.title = 'Download';
button2.value = 'button';

button2.style.height = '32px';
button2.style.width = '100%';
button2.style.backgroundColor = '#363636';
button2.style.border = 'none';
button2.style.borderRadius = '8px';
button.style.fontSize = '14px';
button2.style.fontWeight = '600';
button2.style.padding = "7px 16px";
button2.style.cursor = 'pointer';


buttonContainer.appendChild(button);
buttonContainer.appendChild(breakLine);
buttonContainer.appendChild(breakLine2);
buttonContainer.appendChild(button2);

if (sidebar != null) {
    sidebar.appendChild(buttonContainer);
} else {
    console.log("Trying to append...");
}