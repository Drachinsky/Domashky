var title = document.getElementById('id1');
title.style.color = 'bleak';
title.style.marginTop = '10px';
title.style.background = 'red';


var class1 = document.querySelector('.class1');
class1.style.color = 'blue';
class1.style.fontSize = '14px';
class1.style.textDecoration = 'underline';


var myDiv = document.getElementById('myDiv');
myDiv.classList.toggle('newclass');
console.log(document.getElementById('myDiv').style.cssText);
