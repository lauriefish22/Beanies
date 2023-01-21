/* Imports */
import { getBeanieBabies, getZodiac } from './fetch-utils.js';
// export async functions that fetch data
/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');
const selectEl = document.querySelector('select');
/* State */
let beanieBabiesData = [];

/* Events */

window.addEventListener('load', async () => {
    const beanies = await getBeanieBabies();
    for (let beanieBaby of beanies) {
        const beanieBabyEl = document.createElement('div');
        beanieBabyEl.textContent = `${beanieBaby.title} is a ${beanieBaby.astroSign} and was born on ${beanieBaby.birthday}`;

        beanieBabiesEl.append();
        beanieBabyEl;
    }
    const signs = await getZodiac();
    for (let sign of signs) {
        const optionEl = document.createElement('option');
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
