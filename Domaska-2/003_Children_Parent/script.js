function changeParagraphColor() {
    var myBody = document.getElementById('myBody');
    var elemsP = myBody.getElementsByTagName('p');

    for (var i = 0; i < elemsP.length; i++) {
        elemsP[i].style.color = 'brown';
    }
}

function  changeColorSpanInLink() {
    var elemsLink = document.querySelector('.spanLink');
    elemsLink.style.color = 'red';
}

function changeColorSpan() {
    var elemsDiv = document.getElementsByTagName('div');
    var elemsSpan = document.getElementsByTagName('span');

    for (var i = 0; i < elemsDiv.length; i++) {
        elemsSpan[i].style.color = 'green';
    }    
}

function getClass() {
    var myIdClass = document.getElementById('id1');
    myIdClass.style.marginTop = '10px';
    myIdClass.style.background = 'red';
    myIdClass.classList.toggle('newclass');
    console.log(document.getElementById('id1').style.cssText);
}





changeParagraphColor();
changeColorSpanInLink();
changeColorSpan();
getClass();