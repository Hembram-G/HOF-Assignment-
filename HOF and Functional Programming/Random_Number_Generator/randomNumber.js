// Step 1: Define a variable for the delay duration (in milliseconds)
let delayDuration = 3000;  // You can change this value to modify the delay

// Step 2: Create a function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);  // Generates a random number between 0 and 99
}

// Step 3: Display a message every second indicating the time remaining
let timeRemaining = delayDuration / 1000;  // Convert milliseconds to seconds

let countdownInterval = setInterval(() => {
    console.log(`Time remaining: ${timeRemaining} seconds`);
    timeRemaining -= 1;
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
    }
}, 1000);

// Step 4: Use setTimeout to generate and print the random number after the delay
setTimeout(() => {
    let randomNumber = generateRandomNumber();
    console.log(`Generated random number: ${randomNumber}`);
}, delayDuration);
