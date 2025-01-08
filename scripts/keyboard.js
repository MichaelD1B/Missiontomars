// Get the text input and keyboard elements
const textBox = document.getElementById('text-box');
const keyboard = document.getElementById('keyboard');
const closeButton = document.querySelector('.key.close');
const backspaceButton = document.querySelector('.key.backspace');
const shiftButton = document.querySelector('.key.shift');

// Variable to track whether shift is active or not
let isShiftActive = false;

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
        } else if (keyText === 'Shift') {
            // Toggle shift state when Shift is clicked
            isShiftActive = !isShiftActive;

            // Change the appearance of the Shift button (active/inactive state)
            shiftButton.classList.toggle('active', isShiftActive);

            // Update the letter case of the keys based on shift state
            keys.forEach(k => {
                if (k.innerText.match(/[a-zA-Z]/)) {
                    k.innerText = isShiftActive ? k.innerText.toUpperCase() : k.innerText.toLowerCase();
                }
            });
        } else {
            // Handle letter or character key input
            if (isShiftActive) {
                textBox.value += keyText.toUpperCase(); // Add uppercase letter
            } else {
                textBox.value += keyText.toLowerCase(); // Add lowercase letter
            }
        }
    });
});
