import 'core-js/stable';
import '../sass/main.scss';

let mosaic = document.getElementById('mosaic');
let desert = Array.from(mosaic.querySelectorAll('.desert'));
// let toggleBtns = document.querySelectorAll('.toggle-button');
let colors = [
  '#BDC581',
  '#367865',
  '#7A6563',
  '#3B3B98',
  '#212153',
  '#F4D495',
  '#C4EADF',
  '#7FD1B9']



// sets fill color for each element based on the number attached to it's st class
desert.forEach(el => {
  let num = el.classList[0].slice(-1);
  el.setAttribute('fill', colors[num]);
})

// Changes the mosaic block's color to the next one in the array.
const changeColor = (e) => {
  let curr = e.target.getAttribute('fill');
  let currInd = colors.indexOf(curr);
  
  let nextInd;
  (currInd === colors.length -1) ? nextInd = 0 : nextInd = currInd + 1;

  e.target.setAttribute('fill', colors[nextInd]);
}

// event listener for clicks on mosaic blocks
desert.forEach(block => {
  block.addEventListener('click', changeColor);
})

// adds animation to each mosaic block. All properties stay the same except for the delay, which gets .3s added to it with each item
const addAnimation = () => {
  let delay = 0;
  desert.forEach(block => {
    let animation = `falling .4s ${delay += .3}s cubic-bezier(0.19, 0.94, 0.77, 1.12) forwards`;
    block.style.animation = animation;
    block.style.webkitAnimation = animation;

    // cubic-bezier(0.215, 0.61, 0.355, 1)
    // cubic-bezier(0.55, 0.085, 0.108, 0.73)
  })
}



// event listener for window load
window.addEventListener('load', function () {
  setTimeout(addAnimation, 1000)
}, false);



// // this toggles the background of the toggle container depending on who is being hovered over
// changeParentBackground = (e) => {
//   let direction;
//   (e.target.dataset.place === 'desert') ? direction = 'bottom' : direction = 'top';
//   e.target.parentElement.setAttribute('style', `background-image: linear-gradient(to ${direction}, transparent, #7FD1b9);`);
// }

// ////////////////////// make sure that if you are using the ternary operator to apply a value to a variable, that you assign on both sides of the colon.


// // toggle button event listener
// toggleBtns.forEach(btn => {
//   btn.addEventListener('mouseover', changeParentBackground);
// })








// this is trying to get animation to work through javascript

// adds class to mosaic block
// function addClass(arr) {
//   arr.forEach((block, i) => {
//     block.classList.add('fallingDown');
//   })
// }

// // event listener for window load
// window.addEventListener('load', function () {
//   desert.forEach((block, i) => {
//     this.setTimeout(() => {
//       block.classList.add('fallingDown');
//     }, (i + 1)  * 300);
//   })

//   // setTimeout(addClass, i * 4000, desert, i);
// }, false);


// console.log(desert[0].getAttribute('fill'));


// // SET VH TO MATCH INNER WINDOW HEIGHT
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// })