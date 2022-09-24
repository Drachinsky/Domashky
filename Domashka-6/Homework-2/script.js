var container = document.querySelector('.container');
var moveBlok = document.getElementById('move');
var moveBlokAnim;
var onStop = document.querySelector('[type="button"]')

moveBlok.addEventListener('click', setMoveBlok);
onStop.addEventListener('click', stopBlok);



function setMoveBlok(e) {
    if (moveBlok) {
        moveBlokAnim = moveBlok.animate([
            {
                transform: 'translate(0)'
            },
            {
                transform: 'translate(1000px)'
            }
        ], {
            duration: 5000,
            iterations: Infinity
        })
    } 
    
}

function stopBlok(e) {
    moveBlokAnim.pause();
}


