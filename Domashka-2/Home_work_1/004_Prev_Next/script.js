function getBackgroundColor() {
    var paragraf = document.querySelector('.paragraf');
    paragraf.style.backgroundColor = 'yellow'
}

function getBackground() {
    var itemUl = document.querySelectorAll('.itemUl');
    for (var i = itemUl.length - 1; i >= 0; i--) {
        itemUl[i].style.background = "#ff0000";
    }   
}

function getClass() {
    var myIdClass = document.getElementById('myId');
    myIdClass.style.marginTop = '10px';
    myIdClass.style.background = 'red';
    myIdClass.classList.toggle('newclass');
    console.log(document.getElementById('id1').style.cssText);
}



getBackgroundColor();
getBackground();
getClass();