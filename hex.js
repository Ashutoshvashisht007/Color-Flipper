const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// hex color consists of
// # then numbers from 0 to 9 and then A to F

// for example: #f15025

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    // Get a random number between 0 and 3.
    let hexColor = '#';
    for(let i=0;i<6;i++)
    {
        let idx = getRandomNumber();
        hexColor += hex[idx];
    }
    // const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}
