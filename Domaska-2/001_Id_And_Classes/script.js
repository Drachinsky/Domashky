//добавив стилі для тфйтлів по ід
var title = document.getElementById('id1');
title.style.color = 'black';
title.style.marginTop = '10px';
title.style.background = 'red';

// добавив стилі по класу
var class1 = document.querySelector('.class1');
class1.style.color = 'blue';
class1.style.fontSize = '14px';
class1.style.textDecoration = 'underline';

// добавив новий клас до існуючого
var myDiv = document.getElementById('myDiv');
myDiv.classList.toggle('newclass');
console.log(document.getElementById('myDiv').style.cssText);
