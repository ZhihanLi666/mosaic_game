let dragItem = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let i=0;
const container = document.getElementById('grid-container');
const images = document.querySelectorAll('.drag');

let initialPositions = [];

// Store initial positions of images
images.forEach((image) => {
    const position = {
        left: image.offsetLeft,
        top: image.offsetTop
    };
    initialPositions.push(position);
});

function resetImages() {
    images.forEach((img, index) => {
        img.style.left = initialPositions[index].left;
        img.style.top = initialPositions[index].top;
    });
}

container.addEventListener('mousedown', dragStart);
container.addEventListener('touchstart', dragStart);
container.addEventListener('mousemove', drag);
container.addEventListener('touchmove', drag);
container.addEventListener('mouseup', dragEnd);
container.addEventListener('touchend', dragEnd);

document.querySelector('#ss1').addEventListener('click', function() {
    Image(1);
    resetImages();
});
document.querySelector('#ds1').addEventListener('click', function() {
    Image(0);
    resetImages();
});

function dragStart(event) {
    if (event.target.classList.contains('drag')) {
        event.preventDefault();
        dragItem = event.target;
        if (event.type === 'touchstart') {
            dragOffsetX = event.touches[0].clientX - dragItem.offsetLeft;
            dragOffsetY = event.touches[0].clientY - dragItem.offsetTop;
        } else {
            dragOffsetX = event.clientX - dragItem.offsetLeft;
            dragOffsetY = event.clientY - dragItem.offsetTop;
        }
        i++;
        dragItem.style.zIndex=i
    }
}

function drag(event) {
    if (dragItem !== null) {
        event.preventDefault();
        if (event.type === 'touchmove') {
            dragItem.style.left = (event.touches[0].clientX - dragOffsetX) + 'px';
            dragItem.style.top = (event.touches[0].clientY - dragOffsetY) + 'px';
        } else {
            dragItem.style.left = (event.clientX - dragOffsetX) + 'px';
            dragItem.style.top = (event.clientY - dragOffsetY) + 'px';
        }
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
        } else {
            document.querySelector(`#image${j}`).src = `00.png`;
        }
    }
}
