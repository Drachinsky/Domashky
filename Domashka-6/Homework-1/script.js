var container = document.querySelector('.container')
var myDrag = document.getElementById('my-drag');

myDrag.addEventListener('mousedown', mouseHandler);

function mouseHandler(e) {
    if (e.type === 'mousedown') {
        e.preventDefault();

        document.myDrag = e.target;
        document.offset = {x: e.offsetX, y: e.offsetY};
        document.addEventListener('mousemove', mouseHandler);
        document.addEventListener('mouseup', mouseHandler);
    } else if (e.type === 'mousemove') {
        document.myDrag.style.left = e.clientX - document.offset.x + 'px';
        document.myDrag.style.top = e.clientY - document.offset.y + 'px'
    } else if (e.type === 'mouseup') {
        document.removeEventListener('mousemove', mouseHandler);
        document.removeEventListener('mouseup', mouseHandler);
    }
    

}