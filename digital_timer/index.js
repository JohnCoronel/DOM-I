//1st dash



let current = 0;

const secondOnes = window.setInterval( () => {
    secondOnes = document.getElementById('secondOnes');
    secondTime = document.getElementById('secondTens');

    secondTime.innerHTML = 0;
    secondOnes.innerHTML = current;
    current = ++current;
  
        
    if (current === 10) {
        current = 0;
    }
}, 1000);



let currentSec = 0;
const secondTimes = window.setInterval( () => {
    secondTime = document.getElementById('secondTens');
    secondTime.innerHTML = currentSec;
    if ( currentSec === 0) {
        currentSec = ++currentSec;
    }
},10000);



