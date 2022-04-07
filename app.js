let snake = document.querySelector("#snake");
let object = document.querySelector("#object");
let ml = 400;
let score = 0;
let mt = 200;
let objML = 0;
let highestScore = localStorage.getItem("highestScore");
let lifeCount = 3;
let lifeValue = "&#10084;";
let increementationSpeed = 1;
let objMT = 0;
let angle = 0;
let timerKey;
window.addEventListener("load",()=>{
    snake.style.margin = `${mt}px ${ml}px`;
    snake.style.transform = `rotate(${angle}deg)`;
    objML = Math.round(Math.random() * 750);
    objMT = Math.round(Math.random() * 350);
    object.style.margin = `${objMT}px ${objML}px`;
    timerKey = setInterval(movement,10);
    document.querySelector("#score").innerHTML = `score = ${score}`;
    document.querySelector("#lifeCount").innerHTML = `${lifeValue}${lifeValue}${lifeValue}`;
});
function movement()
{
    if(mt >= 350 || ml >= 730 || mt <= 0 || ml <= -30)
    {
        document.querySelector("#out").play();
        if(lifeCount <= 0)
        {   
            clearInterval(timerKey);
            if(score > highestScore)
            {
                document.querySelector("#score").innerHTML = `you are out but <br> New record you have crossed highest score you score is ${score}`;
            }
            else
            {
                document.querySelector("#score").innerHTML = `you are out <br> highest score = ${highestScore} <br> your score = ${score}`;
                
            }
            alert("press any key to restart");
            location.replace("game.html");
        }
        else
        {
            ml = 400;
            mt = 200;
            lifeCount--;
            document.querySelector("#lifeCount").innerHTML = "";
            for(i=1; i<=lifeCount; i++)
            {
                document.querySelector("#lifeCount").innerHTML = document.querySelector("#lifeCount").innerHTML + lifeValue;
            }
        }
    }
    else
    {
        if((ml <= objML+50 && ml >= objML-50) && (mt <= objMT+50 && mt  >= objMT-50))
        {           
            document.querySelector("#eatenAudio").play();
            objML = Math.round(Math.random() * 750);
            objMT = Math.round(Math.random() * 350);
            object.style.margin = `${objMT}px ${objML}px`;
            if(score%10 == 0)
            {
                increementationSpeed++;
            }
            score++;
            if(score>highestScore)
            {
                document.querySelector("#score").innerText = `New record your score is ${score}`;
                localStorage.setItem("highestScore",score);
            }
            else
            {
                document.querySelector("#score").innerHTML = `highest score = ${highestScore} <br> your current score = ${score}`;
            }
        }
        else
        {
            if(angle==0)
            {
                mt = mt - increementationSpeed;
                snake.style.margin = `${mt}px ${ml}px`;
            }
            else if(angle==90)
            {
                ml = ml + increementationSpeed;
                snake.style.margin = `${mt}px ${ml}px`;
            }
            else if(angle==180)
            {
                mt = mt + increementationSpeed;
                snake.style.margin = `${mt}px ${ml}`;
            }
            else if(angle==270)
            {
                ml = ml - increementationSpeed;
                snake.style.margin = `${mt}px ${ml}`;
            }
        }
    }
}
window.addEventListener("keydown",(key)=>{
    if(key.key == "ArrowUp" && angle != 180)
    {
        angle = 0;
        snake.style.transform = `rotate(${angle}deg)`;
    }
    else if(key.key == 'ArrowDown' && angle != 0)
    {
        angle = 180;
        snake.style.transform = `rotate(${angle}deg)`;
    }
    else if(key.key == 'ArrowLeft' && angle != 90)
    {
        angle = 270;
        snake.style.transform = `rotate(${angle}deg)`;
    }
    else if(key.key = 'ArrowRight' && angle != 270)
    {
        angle = 90;
        snake.style.transform = `rotate(${angle}deg)`;
    }
});
