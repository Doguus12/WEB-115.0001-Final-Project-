let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

// Initial guess
let userGuess = Number(prompt("I'm thinking of a number between 1 and 10. What's your guess? (Type 999 to exit)"));

// Loop until correct or quit
while (true) {
    // Quit immediately if user enters 999
    if (userGuess === 999) {
        alert("Thanks for playing! The number was " + randomNumber + ".");
        break;
    }

    // Count this attempt
    attempts++;

    // Correct guess
    if (userGuess === randomNumber) {
        alert(`Congratulations, you've guessed it in ${attempts} tries!`);
        break;
    }

    // Invalid input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        userGuess = Number(prompt("Invalid input! Please enter a number between 1 and 10 (or 999 to exit):"));
        continue;
    }

    // Too low
    if (userGuess < randomNumber) {
        userGuess = Number(prompt("Too low! Guess again (or 999 to exit):"));
    }
    // Too high
    else if (userGuess > randomNumber) {
        userGuess = Number(prompt("Too high! Guess again (or 999 to exit):"));
    }
}
