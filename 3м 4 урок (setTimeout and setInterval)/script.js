"use strict";

// const logger = () => {
//     console.log('hi!');
// };

// let timerId = setTimeout(logger, 1000);
// let timerId = setInterval(logger, 1000);
// clearInterval(timerId);

// let timerId = setTimeout(function log() {
//     console.log('hi');
//     timerId = setTimeout(log, 500);
// }, 500);

const button = document.querySelector('.btn'),
      box = document.querySelector('.box');

function myAnimate() {
    let pos = 0,
        id = setInterval(frame, 10);

    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = `${pos}px`;
            box.style.left = `${pos}px`;
        }
    }
}

button.addEventListener('click', function() {
    myAnimate();
});