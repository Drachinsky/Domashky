var newDiv;

function createNextDiv() {
    var nextDiv = document.getElementById('one');
    var div = document.createElement('div');
    div.id = 'tow';
    div.innerHTML = 'tow';
    newDiv = div;
    nextDiv.insertAdjacentElement('afterEnd', div);    
}

function addDiv() {
    var towDiv = document.getElementById('tow');
    towDiv.addEventListener('click', function(){
        createDivBeforeDiv();
    });
}

function createDivBeforeDiv() {
    var towDiv = document.getElementById('tow');
    var div2 = document.createElement('div');
    div2.id = 'two_first';
    div2.innerHTML = 'two_first';
    newDiv = div2;
    towDiv.insertAdjacentElement('beforeBegin', div2);
    towDiv.id = 'two_second';
    towDiv.innerHTML = 'two_second';
}

createNextDiv();
addDiv();
