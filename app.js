/* Imports */
import { renderBaby } from './render.js';

/* Get DOM Elements */
const formEl = document.querySelector('form');

const babyListDiv = document.querySelector('.baby-list');

/* State */
let currentId = 3;
let parentSleep = 5;
let babies = [
    { id: 1, name: 'Joey', hunger: 2 },

    { id: 2, name: 'Abby', hunger: 1 },
];

/* Events */

function handleBabyClick(baby) {
    if (baby.hunger <= 0) return;

    if (Math.random() < 0.33) {
        baby.hunger--;
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
    }
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

// (don't forget to call any display functions you want to run on page load!)
displayBabies();
