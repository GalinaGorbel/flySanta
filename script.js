'use strict';

let img = document.querySelector('.snowflake'),
    btn = document.querySelector('#button'),
    reset = document.querySelector('#reset');

let flyInterval,
    count = 0,
    animate = false;

let flySanta = () => {

        flyInterval = requestAnimationFrame(flySanta);

        if (count < document.documentElement.clientHeight) {
            img.style.top = count + 'px';
            count++;
             
        } else {

            cancelAnimationFrame(flyInterval);
            count = 0;
        }
};

function resetSanta () {
    img.style.top = '0px';
    count = 0;
}

btn.addEventListener('click', () => {
    if (!animate) {
        flySanta();
        animate = true;
    } else {
        cancelAnimationFrame(flyInterval);
        animate = false;
    }
});

reset.addEventListener('click', resetSanta);