import 'core-js/stable';
import '../sass/main.scss';

const colors = [
  '#BDC581',
  '#367865',
  '#7A6563',
  '#3B3B98',
  '#212153',
  '#F4D495',
  '#C4EADF',
  '#7FD1B9']


$(window).on('load', () => {
  let desertBlocks = $('.desert');

  // set fill color for each block per the number attached to it's st class --> st4 fills with colors[4]
  $.each(desertBlocks, function(i, block) {
    let num = $(block).attr('class').split(' ')[0].slice(-1);
    $(block).attr('fill', colors[num]);
  })

  // call on animation function after 1 minute
  setTimeout(addAnimation(desertBlocks), 1000);

  // call on color change function on click
  $.each(desertBlocks, function(i, block) {
    $(block).on('click', event, changeColor);
  })
})

// loop through array of blocks to add animation property to each block with increasing delay
function addAnimation(desertBlocks) {
  let delay = 0;
  $.each(desertBlocks, function(i, block) {
    let animation = `falling .4s ${delay += .3}s cubic-bezier(0.19, 0.94, 0.77, 1.12) both`;
    $(block).css({'animation': animation});
    $(block).css({'-webkit-animation': animation});
  })
}

// change the block's color to the next color in the array
function changeColor() {
  let curr = $(event.target).attr('fill');
  let currInd = colors.indexOf(curr);
  
  let nextInd;
  (currInd === colors.length -1) ? nextInd = 0 : nextInd = currInd + 1;

  $(event.target).attr('fill', colors[nextInd]);
}