var sendBtn = document.querySelector('[type="button"]');
var mesageForm = document.querySelector('#mesage-form');
var listItem = document.querySelector('#item');
var regex = /\s{1,}/;
var childUpper;
var childLower;

sendBtn.onclick = sendText;


function sendText() {
    findNumberLetter();
    getTextFromUser();
    createItemToUpperCase();
    createItemToLowerCase();
    texterya = document.querySelector('textarea').value = '';
}

function getTextFromUser() {
    var texterya = document.querySelector('textarea').value;
    var texteryaList = texterya.split(regex);

    for (var i = 0; i < texteryaList.length; i++) {
        var goText = document.createElement('li');
        goText.innerHTML = texteryaList[i];
        listItem.appendChild(goText);
    }
}

function createItemToUpperCase() {
    childUpper = listItem.firstElementChild.innerText;
    childUpper = childUpper.replace(/[a-z]+/g, function(m){
        return m.toUpperCase();
    });
    
    listItem.firstElementChild.innerText = childUpper; 
}

function createItemToLowerCase() {
    childLower = listItem.children;
    
    var childLowerQ = childLower[childLower.length - 1];
    var childLowerQw = childLower[childLower.length - 2];
    childLowerQ = childLowerQ.innerText;
    childLowerQw = childLowerQw.innerText;

    childLowerQ = childLowerQ.replace(/[A-Z]+/g, function(m){
        return m.toLowerCase();
    });
    childLower[childLower.length - 1].innerText = childLowerQ;

    childLowerQw = childLowerQw.replace(/[A-Z]+/g, function(m){
        return m.toLowerCase();
    });
    childLower[childLower.length - 2].innerText = childLowerQw;
}

function findNumberLetter() {
    texterya = document.querySelector('textarea').value;
    var patt = new RegExp("a", "g");
    var result = texterya.match(patt);
    alert(`В тексте присутствует: ${result.length} букв (a).`)
}
  