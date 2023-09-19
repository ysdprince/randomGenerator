const randomGenerator = (() => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Return the random number
    return randomNumber;
})();

console.log(`Random Number: ${randomGenerator}`);
