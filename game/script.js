score = 0;
cross = true;

audio = new Audio('fish.mp3');
audiogo = new Audio('go.mp3');
audioj = new Audio('jump.mp3');
setTimeout(() => {
    audio.play();
},1);
setTimeout(() => {
    audio.play();
},24000);
document.onkeydown = function(e){
    {
         if(e.keyCode==38)
         {
             fish = document.querySelector('.fish');
             fish.classList.add('animateFish');
             audioj.play();
             setTimeout(() => {
                fish.classList.remove('animateFish');
                audioj.pause();
             }, 500);
         }
         if(e.keyCode==39)
         {
             fish = document.querySelector('.fish');
             fishX = parseInt(window.getComputedStyle(fish, null).getPropertyValue('left'));
             fish.style.left = fishX+112+"px";
             
         }
         if(e.keyCode==37)
         {
             fish = document.querySelector('.fish');
             fishX = parseInt(window.getComputedStyle(fish, null).getPropertyValue('left'));
             fish.style.left = (fishX-112)+"px";
             
         }
    }
}

setInterval(() => {
    fish = document.querySelector('.fish');
    gameOver = document.querySelector('.gameOver');
    tort = document.querySelector('.tort');
    btn = document.querySelector('.btn');

    fx = parseInt(window.getComputedStyle(fish, null).getPropertyValue('left'));
    fy = parseInt(window.getComputedStyle(fish, null).getPropertyValue('top'));
    
    tx = parseInt(window.getComputedStyle(tort, null).getPropertyValue('left'));
    ty = parseInt(window.getComputedStyle(tort, null).getPropertyValue('top'));
    
    offsetX = Math.abs(fx-tx);
    offsetY = Math.abs(fy-ty);
    console.log(offsetX);
    console.log(offsetY);
    if(offsetX<32 && offsetY<61)
    {
        btn.innerHTML = "PLAY AGAIN";
        gameOver.innerHTML = "Game Over!!!";
        tort.classList.remove('animateTort');
        updateScore((score-1));
        fish.style.left = 10+'px';
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();            
        },1000)

    }
    else if(offsetX<97 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(tort, null).getPropertyValue('animation-duration'));
            newDur = aniDur -0.1;
            tort.style.animationDuration = newDur+'s';
        },500)
    }
}, 100);

function updateScore(score){
     scoreCont.innerHTML = "Your Score : " + score;
}