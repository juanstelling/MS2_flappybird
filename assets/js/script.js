document.addEventListener('DOMContentLoaded', () => {

    const bird = document.querySelector('.bird')
    const pipe = document.querySelector('.pipe')
    const gameDisplay = document.querySelector('.game')
    const ground = document.querySelector('.ground')

    let birdLeft = 150;
    let birdBottom = 300;
    let gravity = 2;

    // START GAME
    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + "px";
    }
    let gametimerId = setInterval(startGame, 32) // How slow the bird is going down 

    // CONTROL SET TO SPACE KEY (= 32)
// hier moet nog mobile touch bij 
    function control(e) {
        if (e.keyCode === 32) {
            jump()
        };
    };

    // BIRD JUMPING
    function jump() {
        if (birdBottom < 480) birdBottom += 50;    // Bird can't jump higher than 480px & how much px the bird jumps 
        bird.style.bottom = birdBottom + "px";
        console.log(birdBottom)
    }
    document.addEventListener('keyup', control)

    // PIPES
    function pipes() {
        let pipeLeft = 768;
        let randomheight = Math.random() * 60; // random heights for the pipe 
        let pipeBottom = randomheight;
        pipe.style.bottom = pipeBottom + "px";
        pipe.style.left = pipeLeft + "px";

        function movePipe() {
            pipeLeft -= 2;
            pipe.style.left = pipeLeft + "px";

            if (pipeLeft === -60) {
                clearInterval(timerId)
                gameDisplay.removeChild(pipe);
            }
        }
        let timerId = setInterval(movePipe, 15); // snelheid bird

    }
    pipes()

   
    

  

  
   

});



