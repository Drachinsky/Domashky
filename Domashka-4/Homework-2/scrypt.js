var divArr = document.getElementsByTagName("div");
var divArr2 = document.querySelector("div");


function setColor() { 
    for (var i = 0; i < divArr.length; i++) {
        divArr[i].onmouseover = function () {
            var bgrColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            this.style.backgroundColor = bgrColor;
            this.innerText = `Цвет: ` + this.style.backgroundColor;
        }        
        divArr[i].innerText = 'Найди. Случайний цвет'
    }    
}


setColor();













