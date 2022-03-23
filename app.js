// console.log('hello from app.js');

// let myDog = 'Eddie';

// console.log (`hello ${myDog}`);
// console.log (`${myDog} is very cute.`);

// const label = document.getElementById('label');
// label.style.color = 'red';

// const greg = document.getElementById('greg');
// greg.style.color = 'blue';
const button = document.getElementById('button');
button.addEventListener('click', ()=> {
    const inputs = document.getElementById('email-inputs');

    inputs.classList.toggle('hide');

    const thankYou = document.getElementById('thank-you');

    thankYou.classList.toggle('hide');
    
});

