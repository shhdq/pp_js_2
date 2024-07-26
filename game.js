// Define a function called uzminiSkaitli (Guess the Number)
function uzminiSkaitli() {
    // Generate a random number between 1 and 100
    // Math.random() generates a number between 0 and 1
    // Multiply by 100 to get a number between 0 and 99.99
    // Math.floor() rounds down to the nearest integer
    // Add 1 to ensure the number is between 1 and 100
    const minamaisSkaitlis = Math.floor(Math.random() * 100) + 1;

    // Initialize a counter for the number of guesses
    let meginajumi = 0;

    // Flag to control the game loop
    let uzminets = false;

    // Start the game loop
    while (!uzminets) {
        // Prompt the user to enter a guess
        // The prompt function shows a dialog box and returns the user's input as a string
        let minejums = prompt("Uzmini skaitli no 1 līdz 100: ");

        // Increment the guess counter
        meginajumi++;

        // Convert the user's input to a number
        // This is necessary because prompt returns a string
        minejums = Number(minejums);

        // Check if the input is a valid number
        if (isNaN(minejums)) {
            // If not a number, alert the user and continue the loop
            alert("Lūdzu, ievadiet dērīgu skaitli!")
        } else if (minejums < minamaisSkaitlis) {
            // If the guess is too low, give a hint
            alert("Par zemu! Mēģini vēlreiz.")
        } else if (minejums > minamaisSkaitlis) {
            // If the guess is too high, give a hint
            alert("Par augstu! Mēģini vēlreiz.")
        } else {
            // If the guess is correct, set the flag to end the game
            uzminets = true;
            // Alert the user of their victory and show the number of attempts
            alert("Apsveicu! Tu uzminēji skaitli " + minamaisSkaitlis + " ar " + meginajumi + " mēģinājumiem.")
        }
    }
}

// Call the function to start the game
uzminiSkaitli();