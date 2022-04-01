const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearAllBtn = document.getElementById('clear-all')
const colorPicker = document.getElementById('color-picker')

console.log(colorPicker.value)

const sizeEl = document.getElementById("size")

let size = 20;
let isPressed = false;
let x = undefined;
let y = undefined;


canvas.addEventListener('mousedown', ()=> {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', ()=> {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e)=> {
    if(isPressed){
    ctx.strokeWidth = size;
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x, y)
    drawLine(x, y, x2, y2)
    x = x2;
    y = y2;
 }
})

function drawCircle(x, y){
    updateColor();
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fill();
}

function drawLine (x1, y1, x2, y2){
    updateColor()    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseBtn.addEventListener('click', ()=>{
    size += 5;
    if(size > 50)
       size = 50;
    updateSize(size);
})

decreaseBtn.addEventListener('click', ()=>{
    size -= 5;
    if(size < 5)
        size = 5;
    updateSize(size);
})

function clearAll(){
    ctx.fillStyle = '#f5f5f5'
    ctx.fillRect(0, 0, 800, 800);
    updateColor();
    
}
clearAllBtn.addEventListener('click', clearAll);

function updateSize(size){
    sizeEl.innerText = size;
}


colorPicker.addEventListener('change', updateColor);

function updateColor(){
    ctx.fillStyle = colorPicker.value
    ctx.strokeStyle = colorPicker.value;
}