let snake = document.querySelector("#snake");
let object = document.querySelector("#object");
let ml = 400;
let score = 0;
let mt = 200;
let objML = 0;
let increementationSpeed = 1;
let objMT = 0;
let angle = 0;
let timerKey;
window.addEventListener("load",()=>{
    snake.style.margin = `${mt}px ${ml}px`;
    snake.style.transform = `rotate(${angle}deg)`;
    alert("This is a game in web browser press ok to start");
    objML = Math.round(Math.random() * 750);
    objMT = Math.round(Math.random() * 350);
    object.style.margin = `${objMT}px ${objML}px`;
    timerKey = setInterval(movement,10);
});
function movement()
{
    if(mt >= 350 || ml >= 750 || mt <= 0 || ml <= 0)
    {
        document.querySelector("#out").play();
        document.querySelector("#score").innerText = `You are out \n Your score is ${score}`;
        clearInterval(timerKey);
    }
    else
    {
        if((ml <= objML+30 && ml >= objML-30) && (mt <= objMT+30 && mt  >= objMT -30))
        {           
            document.querySelector("#eatenAudio").play();
            objML = Math.round(Math.random() * 750);
            objMT = Math.round(Math.random() * 350);
            object.style.margin = `${objMT}px ${objML}px`;
            if(score%5 == 0)
            {
                increementationSpeed++;
            }
            score++;
            document.querySelector("#score").innerText = `score = ${score}`;
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