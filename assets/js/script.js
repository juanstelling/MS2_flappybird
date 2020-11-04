document.addEventListener('DOMContentLoaded', () => {

    const bird = document.getElementById('bird');
    const pipe = document.getElementById('pipe')
    const gameDisplay = document.getElementById('game');
    const ground = document.getElementById('ground');

    let birdLeft = 150;
    let birdBottom = 300;
    let gravity = 2;

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
        let pipeLeft = 768;
        let randomheight = Math.random() * 60; // random heights for the pipe 
        let pipeBottom = randomheight;
        const pipe = document.createElement('div');
        pipe.classList.add('pipe')
        gameDisplay.appendChild(pipe)
        pipe.style.left = pipeLeft + "px";
        pipe.style.bottom = pipeBottom + "px";

        function movePipe(){
            pipeLeft -= 2;
            pipe.style.left = pipeLeft + "px";

            if (pipeLeft === 0) {
                  clearInterval(timerId);
                gameDisplay.removeChild(pipe);
            }
        }
        let timerId = setInterval(movePipe, 10) // speed of pipe
        setTimeout(generatePipe, 3000)
    }
    generatePipe();

});



