let counterGrid = document.createElement('div');
document.body.prepend(counterGrid);
counterGrid.setAttribute('class', 'counter-grid'
);
let counterPlus = document.createElement('button');
counterGrid.prepend(counterPlus);
counterPlus.textContent = "+";
counterPlus.style.backgroundColor = 'blue';

let counterBox = document.createElement('div');
counterGrid.prepend(counterBox);
counterBox.setAttribute('class', 'counter-box');
counterBox.textContent = 0;

let counterMinus= document.createElement('button');
counterGrid.prepend(counterMinus);
counterMinus.textContent = "-";
counterMinus.style.backgroundColor = 'red';

counterPlus.addEventListener('click', function() {
    counterBox.textContent = Number(counterBox.textContent)+1;
})

counterMinus.addEventListener('click', function() {
    counterBox.textContent = Number(counterBox.textContent)-1;
})