function getBackgroundColor() {
    var bcgColAll = document.querySelector('[target="_self"]');
    bcgColAll.style.backgroundColor = 'yellow';
    console.log(bcgColAll);

    var bcgCol = document.querySelector('[target="_blank"]');
    bcgCol.style.backgroundColor = 'red'
    console.log(bcgCol)
}

getBackgroundColor();