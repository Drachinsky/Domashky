var clickLink = document.querySelector('a');
var loremText = document.querySelector('.my-text');
var cancelBtn = document.querySelector('.btn');

clickLink.addEventListener('click', clickHandler);
cancelBtn.addEventListener('click', removeHandler);


function clickHandler() { 
    if (loremText.style.display == 'flex') {
        loremText.style.display = 'none';
    } else if(loremText.style.display == 'none') {
        loremText.style.display = 'flex'
    }
    else {loremText.style.display = 'flex'}   
}

function removeHandler() {
    clickLink.removeEventListener('click', clickHandler);
}




