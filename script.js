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

function resetSanta() {
    cancelAnimationFrame(flyInterval);
    animate = false;
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

//УСЛОЖНЕННОЕ ЗАДАНИЕ #1
let input = document.querySelector('input'),
    text = document.querySelector('.text');

function debounce(func, timer) {
    return function () {
        let previousCall = this.lastCall;

        this.lastCall = Date.now();

        if (previousCall && ((this.lastCall - previousCall) <= timer)) {
            clearTimeout(this.lastCallTimer);
        }

        this.lastCallTimer = setTimeout(() => func(), timer);
    };
}

let letter = () => {

    text.innerHTML = input.value;
};

let debounceleLetter = debounce(letter, 300);
input.addEventListener('input', debounceleLetter);


/* 
function throttle(f, t) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall === undefined || (this.lastCall - previousCall) > t) { // throttle time has elapsed
            f(args);
        }
    };
}

let logger = (args) => console.log(`My args are ${args}`);
// throttle: call the logger at most once every two seconds
let throttledLogger = throttle(logger, 2000);  */