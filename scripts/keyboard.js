// Select elements
const textBox = document.getElementById('text-box');
const keyboard = document.getElementById('keyboard');
const closeButton = document.querySelector('.key.close');
const shiftButton = document.querySelector('.key.shift');
const keys = document.querySelectorAll('.key');

// Variable to track shift state
let isShiftActive = false;

// Show the keyboard when the input field is focused
textBox.addEventListener('focus', () => {
    keyboard.style.display = 'block';
});

// Hide the keyboard when the 'Close' button is clicked
closeButton.addEventListener('click', () => {
    hideKeyboard();
});

// Handle key clicks
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyText = key.innerText;

        // Handle special keys
        if (key.classList.contains('shift')) {
            toggleShift();
        } else if (key.classList.contains('space')) {
            textBox.value += ' ';
        } else if (key.classList.contains('backspace')) {
            textBox.value = textBox.value.slice(0, -1);
        } else if (!key.classList.contains('close')) {
            // Add letter based on shift state
            textBox.value += isShiftActive ? keyText.toUpperCase() : keyText.toLowerCase();
        }
    });
});

// Function to hide the keyboard
function hideKeyboard() {
    keyboard.style.display = 'none';
    isShiftActive = false; // Reset shift state
    updateKeyCase();
}

// Function to toggle shift state
function toggleShift() {
    isShiftActive = !isShiftActive;
    shiftButton.classList.toggle('active', isShiftActive);
    updateKeyCase();
}

// Function to update key case based on shift state
function updateKeyCase() {
    keys.forEach(key => {
        if (key.innerText.match(/^[a-zA-Z]$/)) {
            key.innerText = isShiftActive
                ? key.innerText.toUpperCase()
                : key.innerText.toLowerCase();
        }
    });
}

// Hide keyboard when clicking outside
document.addEventListener('click', (event) => {
    if (!keyboard.contains(event.target) && event.target !== textBox) {
        hideKeyboard();
    }
});
