// Get the text input and keyboard elements
const textBox = document.getElementById('text-box');
const keyboard = document.getElementById('keyboard');
const closeButton = document.querySelector('.key.close');
const backspaceButton = document.querySelector('.key.backspace');

// Function to show the keyboard when the input field is clicked
textBox.addEventListener('focus', () => {
    keyboard.style.display = 'block'; // Show the keyboard
});

// Function to hide the keyboard when the 'Close' button is clicked
closeButton.addEventListener('click', () => {
    keyboard.style.display = 'none'; // Hide the keyboard
});

// Function to handle key clicks
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyText = key.innerText;

        // Check if the key clicked is the 'Close' button
        if (keyText === 'Close') {
            keyboard.style.display = 'none'; // Hide the keyboard
        } else if (keyText === 'Space') {
            textBox.value += ' '; // Add space when space key is clicked
        } else if (keyText === 'Backspace') {
            textBox.value = textBox.value.slice(0, -1); // Remove last character
        } else {
            textBox.value += keyText; // Add clicked key text to input
        }
    });
});
