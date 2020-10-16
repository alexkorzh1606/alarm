'use strict'

let currentHours = document.querySelector('.hours');
let currentMinutes = document.querySelector('.minutes');
let currentSeconds = document.querySelector('.seconds');
let alarmInput = document.querySelector('.alarm_input');
let alarmButton = document.querySelector('.alarm_button');
let alarmSetAudio = new Audio('http://www.dashingstrike.com/Automato/games/ATITD/sounds/start.wav');
let alarmStopAudio = new Audio('http://www.funmag.org/wp-content/uploads/2013/11/08-alarm-ringtones.mp3');

setInterval ( ()=> {
    let currentTime = new Date();

    if (currentTime.getHours() < 10) {
        currentHours.innerHTML = '0' + String(currentTime.getHours());
    } else {
        currentHours.innerHTML = String(currentTime.getHours());
    }
    
    if (currentTime.getMinutes() < 10){
        currentMinutes.innerHTML = '0' + String(currentTime.getMinutes());
    } else {
        currentMinutes.innerHTML = String(currentTime.getMinutes());
    }
    
    if (currentTime.getSeconds() < 10) {
        currentSeconds.innerHTML = '0' + String(currentTime.getSeconds())
    } else {
        currentSeconds.innerHTML = String(currentTime.getSeconds());
    }





}, 1000);

alarmButton.onclick = function() {
    alarmSetAudio.play();
    window.alert('ALARM IS SET');
    let alarm = alarmInput.value.split(':');
    console.log(alarm);
    setInterval ( () => {
        let currentTime = new Date();
        if (+currentTime.getHours() === +alarm[0] && +currentTime.getMinutes() === +alarm[1]) {
            alarmStopAudio.play();
            alarmButton.innerHTML = 'STOP';
            alarmButton.style.backgroundColor = '#B15445';
        }
    }, 1000);
    alarmButton.onclick = function () {
        alarmStopAudio.pause();
        alarmButton.innerHTML = 'SET ALARM';
        alarmButton.style.backgroundColor = '#D5A038';
        alarm[0] = '';
        alarm[1] = '';
    }
}
