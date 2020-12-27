'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('offsetLeft', box.offsetLeft);
    console.log('offsetTop', box.offsetTop);
    console.log('offsetRight', box.offsetRight);
    console.log('offsetBottom', box.offsetBottom);
    console.log('offsetTop', window.getComputedStyle(box));
    console.log('offsetTop', box.getBoundingClientRect());
});