let dragItem = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let i=0;
const container = document.getElementById('grid-container');

container.addEventListener('mousedown', dragStart);
container.addEventListener('mousemove', drag);
container.addEventListener('mouseup', dragEnd);


document.querySelector('#ss1').addEventListener('click', function() {
  Image(1);
});
document.querySelector('#ds1').addEventListener('click', function() {
  Image(0);
});



function dragStart(event) {
  if (event.target.classList.contains('drag')) {
    dragItem = event.target;
    dragOffsetX = event.clientX - dragItem.offsetLeft;
    dragOffsetY = event.clientY - dragItem.offsetTop;
    i++;
    dragItem.style.zIndex=i
  }
}

function drag(event) {
  if (dragItem !== null) {
    event.preventDefault();
    dragItem.style.left = (event.clientX - dragOffsetX) + 'px';
    dragItem.style.top = (event.clientY - dragOffsetY) + 'px';
  }
}

function dragEnd(event) {
  if (dragItem !== null) {
    i++;
    dragItem.style.zIndex=i;
    
    dragItem = null;
  }
}

function Image(n) {
  for (let j = 1; j <= 9; j++) {

    if (`jigsaw/${n*9+j}.png` !== null) {
      document.querySelector(`#image${j}`).src = `jigsaw/${n*9+j}.png`;
    // Do something with the image
  } 
      
    else {
      document.querySelector(`#image${j}`).src = `00.png`;
    }
      

  
}
}

