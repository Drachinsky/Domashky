var divArr = document.getElementsByTagName("div");



function setColor() {
    for (var i = 0; i < divArr.length; i++) {
        divArr[i].onclick = function () {
            var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            this.style.backgroundColor = color;
        }
        
    }
    
}

function getTextColor() {
    
    for (var i = 0; i < divArr.length; i++) {
        divArr[i].onclick = function () {
            var style = getComputedStyle(divArr);
            console.log(style.backgroundColor)
        }
       
    }
    
}

setColor();
getTextColor();


// var dodo = 