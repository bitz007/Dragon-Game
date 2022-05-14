cross = true;
score= 0;
let dino = document.querySelector('.dino');
let dragon = document.querySelector('.dragon');
let over = document.querySelector('.over');
let scoreCount = document.querySelector('.scoreCount');
let dragonAnimate = document.querySelector('.dragonAnimate');

let audio = new Audio('music.mp3');
let audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();  

}, 600);



document.onkeydown = (e) =>{

// The below to get the position of the dragon and dino in left and top. We could have done the same with right and bottom as well
let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

let ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
let oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

offsetX = Math.abs(dx-ox);

offsetY = Math.abs(dy-oy);

       if(e.keyCode==38){

    
        dino.classList.add('dinoAnimate');
        
        setTimeout(() => {
          dino.classList.remove('dinoAnimate');
            
        }, 600);

}

if(e.keyCode==39){

    dino.style.left = dx + 100 + "px";
}

if(e.keyCode==37){

    dino.style.left = (dx-100) + "px";
}

}

setInterval(() => {
    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    
    let ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));
    
    offsetX = Math.abs(dx-ox);
    
    offsetY = Math.abs(dy-oy);

   


    if(offsetX < 180 && offsetY < 100){


dragon.classList.remove('dragonAnimate');
over.innerHTML = "Game Over";
over.style.color = "red";
audiogo.play();
audio.pause();


setTimeout(() => {
    audiogo.pause();
    
}, 1000);


    }

    else if( offsetX < 300 && cross){

    score += 1;
    updateScore(score);
    cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

}

setTimeout(() => {
    

let DragonSpeed = parseFloat(window.getComputedStyle(dragonAnimate, null).getPropertyValue('animation-duration'));
NewSpeed = DragonSpeed - 0.005;
dragonAnimate.style.animationDuration = NewSpeed + "s";
console.log('New animation duration: ', NewSpeed);
}, 500);

    
}, 100);

function updateScore(score) {

    scoreCount.innerHTML = "Your Score:" + score
}




