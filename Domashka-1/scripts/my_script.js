

function selectFirstItem(form) {
    if (form) {
        var one = document.getElementById('myUl');        
        one.firstElementChild.style.color = 'red';
        one.lastElementChild.style.color = 'black';
    } 
    
}

function selectLastItem(form) {
    if (form) {
        var one = document.getElementById('myUl');
        one.lastElementChild.style.color = 'red';
        one.firstElementChild.style.color = 'black';
    }       
}

var tow = 0;
function selectNextItem(form) {
    var one = document.getElementById('myUl').children;
    if (tow !== 0) {
        one[tow - 1].style.color = 'black';
    }

    if (tow >= one.length) tow = 0;
    one[tow].style.color = 'green';
    tow += 1;
}

var three = 0;
function selectPrevItem(form) {
    var one = document.getElementById('myUl').children;
    var tow = document.getElementById('myUl').lastElementChild;

    one[three].style.color = 'black'

    if (three == 0) {
        three = one.length - 1;
    } else {
        three--;
    }

    one[three].style.color = 'green'
}

function addLastElem(form) {
    if (form) {
        var tow = document.createElement('li');
        tow.innerHTML = "NEW ITEM";
        document.getElementById('myUl').appendChild(tow)
    }
}

function deleteLastElem(form) {
    if (form) {
        var one = document.getElementById('myUl');
        one.removeChild(one.lastChild);
    }
}

function addFirstElem(form) {
    if (form) {
        var one = document.getElementById('myUl')
        var tow = document.createElement('li');
        tow.innerHTML = "NEW ITEM";
        one.prepend(tow);
    }
}