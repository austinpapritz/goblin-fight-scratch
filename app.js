/* Imports */
import { renderBaby } from './render.js';

/* Get DOM Elements */
const formEl = document.querySelector('form');

const babyListDiv = document.querySelector('.baby-list');

const sleepEl = document.querySelector('#sleep-lvl');
const fedEl = document.querySelector('#babies-fed-num');

const parentEmoji = document.querySelector('.parent-emoji');

/* State */
let babies = [
    { id: 1, name: 'Joey', hunger: 2 },

    { id: 2, name: 'Abby', hunger: 1 },
];

let currentId = 3;
let parentSleep = 5;
let fedCount = 0;

/* Events */

function handleBabyClick(baby) {
    if (baby.hunger <= 0) return;

    if (Math.random() < 0.33) {
        baby.hunger--;
        if (baby.hunger === 0) {
            fedCount++;
            console.log(fedCount);
        }
        parentSleep++;
        alert('You fed ' + baby.name + ' and got some rest!');
    } else {
        if (Math.random() < 0.5) {
            parentSleep--;
            parentSleep--;
            alert(baby.name + ' is VERY fussy. This is going to be a long night!');
        } else {
            parentSleep--;
            alert(baby.name + ' is too fussy! You lost sleep!');
        }
        if (parentSleep === 0) {
            parentEmoji.classList.add('game-over');
            alert('GAME OVER');
        }
    }
    displayBabies();
    displayParentStats();
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const newBaby = {
        id: currentId,
        name: data.get('baby-name'),
        hunger: Math.ceil(Math.random() * 3),
    };

    currentId++;
    babies.push(newBaby);
    displayBabies();
});

/* Display Functions */

function displayBabies() {
    babyListDiv.textContent = '';
    for (let baby of babies) {
        const babyEl = renderBaby(baby);

        babyEl.addEventListener('click', () => {
            handleBabyClick(baby);
        });

        babyListDiv.append(babyEl);
    }
}

function displayParentStats() {
    sleepEl.textContent = parentSleep;
    fedEl.textContent = fedCount;
}

// (don't forget to call any display functions you want to run on page load!)
displayBabies();
displayParentStats();
