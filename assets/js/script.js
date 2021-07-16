
const wordList = ['pizza','ramen','coding','baseball','einstein','whiteboard']



function timer() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + ' seconds remaining';
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = ' '
            //display you lose screen
        };
    }, 1000);
}