let buttonStart = document.getElementById('start');
buttonStart.addEventListener('click', guessNumber);


function guessNumber() {
    let random = Math.floor(Math.random() * 10) + 1;
    for (let i = 1; i <= 3; i++) {
        let GuessNumber = prompt('Guess the Number in 1 to 10');
        if (GuessNumber === ' ') {
            alert('Empty input!Try again')
        } else if (GuessNumber >= 0 && GuessNumber <= 10) {
            if (GuessNumber == random) {
                alert('You Win.!');
                break;
            } else if (GuessNumber > random) {
                alert('Correct answer is smaller! ')
                if (i == 3) {
                    alert('You lose!')
                }
            } else if (GuessNumber < random) {
                alert('Correct answer is greater!')
                if (i == 3) {
                    alert('You lose!')
                }
            }
            else {
                alert('Invalid Number!')
            }
        }else{
            alert('Invalid Number')
        }



    }
}