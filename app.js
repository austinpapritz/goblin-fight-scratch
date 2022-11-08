/* Imports */
import { renderBaby } from './render.js';

/* Get DOM Elements */
const formEl = document.querySelector('form');

/* State */
let currentId = 3;

let babies = [
    { id: 1, name: 'Joey', hunger: 3 },

    { id: 2, name: 'Abby', hunger: 3 },
];

/* Events */
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
    console.log(babies);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
