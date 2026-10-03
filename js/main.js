function getComputedChoice() {
    let n = Math.random();
    
    if (n < 0.3) {
        return 'Rock';
    } else if (n > 0.3 && n < 0.7) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputedChoice());
