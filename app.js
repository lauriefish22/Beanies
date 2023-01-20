/* Imports */
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export async functions that fetch data

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');

/* State */
let beanieBabiesData = [];
let astroSignData = [];

/* Events */

window.addEventListener('load', async () => {
    let { data, error } = await client.from('beanie_babies').select('*').limit(100);

    for (let beanieBaby of data) {
        const beanieBabyEl = document.createElement('div');
        beanieBabyEl.textContent = `${beanieBaby.title} is a ${beanieBaby.astroSign} and was born on ${beanieBaby.birthday}`;

        beanieBabiesEl.append();
        beanieBabyEl;
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
