document.addEventListener('DOMContentLoaded', () => {

    const bird = document.getElementById('bird');
    const pipe = document.getElementById('pipe')
    const gameDisplay = document.getElementById('game');
    const ground = document.getElementById('ground');

    let birdLeft = 150;
    let birdBottom = 300;
    let gravity = 2;
    let isGameOver = false;
    let gap = 430;

    // START GAME
    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + "px";
    }
    let gametimerId = setInterval(startGame, 20); // speed of bird


    // CONTROL SET TO SPACE KEY (= 32)
// hier moet nog mobile touch bij 
    function control(e) {
        if (e.keyCode === 32) {
            jump();
        }
    }

    // BIRD JUMPING
    function jump() {
        if (birdBottom < 480) birdBottom += 50;    // Bird can't jump higher than 480px & how much px the bird jumps 
        bird.style.bottom = birdBottom + "px";
        console.log(birdBottom);
    }
    document.addEventListener('keypress', control);


    // PIPES 
    function generatePipe() { 
        let pipeLeft = 680;
        let randomheight = Math.random() * 60; // random heights for the pipe 
        let pipeBottom = randomheight;
        const pipe = document.createElement('div');
        const topPipe = document.createElement('div')
        if (!isGameOver) {
            pipe.classList.add('pipe')
            topPipe.classList.add('topPipe')
        }
        gameDisplay.appendChild(pipe)
        gameDisplay.appendChild(topPipe)
        pipe.style.left = pipeLeft + "px";
        topPipe.style.left = pipeLeft + "px";
        pipe.style.bottom = pipeBottom + "px";
        topPipe.style.bottom = pipeBottom + gap + "px";


        function movePipe(){
            pipeLeft -= 2;
            pipe.style.left = pipeLeft + "px";
            topPipe.style.left = pipeLeft + "px";

            if (pipeLeft === 0) {            // pipes disapeers when they hit left
                clearInterval(timerId);
                gameDisplay.removeChild(pipe);
                gameDisplay.removeChild(topPipe);
            }
            if (
                pipeLeft > 150 && pipeLeft < 184 &&
                (birdBottom < pipeBottom + 234 || birdBottom > pipeBottom + gap -95) || 
                birdBottom === 0) {
                gameOver()
                clearInterval(timerId);  
            }
        }
        let timerId = setInterval(movePipe, 10) // speed of pipe
        if (!isGameOver) setTimeout(generatePipe, 3000) // time when other pipe appeers
    }
    generatePipe();

    // GAMEOVER 
    function gameOver() {
        clearInterval(gametimerId)
        console.log('game over')
        isGameOver = true;
        document.removeEventListener('keypress', control) // bird stays on the ground & don't react on keyspace
    }

});



