"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start(){
    pause();
    cron = setInterval(() => { timer (); }, 10);
}

function pause(){
    clearInterval(cron);
}


function reset(){
    // document.getElementById('corredor1').innerText = hour + ':' + minute + ':' + second + ':' + millisecond;

    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '0';
    document.getElementById('minute').innerText = '0';
    document.getElementById('second').innerText = '0';
    document.getElementById('millisecond').innerText = '0';
   
}

function timer(){
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++ 
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input){
    return input > 10 ? input : `${input}`
}