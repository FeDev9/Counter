let counterGrid = document.createElement('div');
document.body.prepend(counterGrid);
counterGrid.setAttribute('class', 'counter-grid'
);
let counterPlus = document.createElement('button');
counterGrid.prepend(counterPlus);
counterPlus.textContent = "+";
counterPlus.style.backgroundColor = '#627bf5';

let counterBox = document.createElement('div');
counterGrid.prepend(counterBox);
counterBox.setAttribute('class', 'counter-box');
counterBox.textContent = 0;

let counterMinus= document.createElement('button');
counterGrid.prepend(counterMinus);
counterMinus.textContent = "-";
counterMinus.style.backgroundColor = '#ff9797';

counterPlus.addEventListener('click', function() {
    counterBox.textContent = Number(counterBox.textContent)+1;
})

counterMinus.addEventListener('click', function() {
    counterBox.textContent = Number(counterBox.textContent)-1;
})

counterMinus.addEventListener('mouseenter', function(){
    if(!counterMinus.classList.contains('hover'))
        counterMinus.classList.add('hover');
        counterMinus.style.backgroundColor='red';
})

counterMinus.addEventListener('mouseleave', function(){
    if(counterMinus.classList.contains('hover'))
        counterMinus.classList.remove('hover');
        counterMinus.style.backgroundColor='#ff9797';
})

counterPlus.addEventListener('mouseenter', function(){
    if(!counterPlus.classList.contains('hover'))
        counterPlus.classList.add('hover');
        counterPlus.style.backgroundColor='blue';
})

counterPlus.addEventListener('mouseleave', function(){
    if(counterPlus.classList.contains('hover'))
        counterPlus.classList.remove('hover');
        counterPlus.style.backgroundColor='#627bf5';
        
})
