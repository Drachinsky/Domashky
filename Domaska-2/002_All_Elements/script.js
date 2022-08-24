var body = document.getElementById('tag');
var elems = body.getElementsByTagName('*');

for (var i = 0; i < elems.length; i++) {
    elems[i].style.color = 'red'
    elems[i].style.textDecoration = 'none'
}

var elems1 = body.getElementsByTagName('p');
for (var i = 0; i < elems1.length; i++) {
    elems1[i].style.color = 'brown';
    elems1[i].style.textTransform = 'uppercase';
}

var elems2 = body.getElementsByTagName('a');
for (var i = 0; i < elems2.length; i++) {
    elems2[i].style.fontWeight = 'bold';
    elems2[i].style.fontStyle = 'italic';
    elems2[i].style.textDecoration = 'underline';
    elems2[i].style.textTransform = 'uppercase';
}

var paragraf = document.querySelector('.class');
paragraf.style.color = 'green';

var myIdClass = document.getElementById('id1');
myIdClass.style.color = 'black'
myIdClass.style.marginTop = '10px';
myIdClass.style.background = 'red';
myIdClass.classList.toggle('newclass');
console.log(document.getElementById('id1').style.cssText);

var myIdClass2 = document.getElementById('id2');
myIdClass2.classList.toggle('newclass');
console.log(document.getElementById('id2').style.cssText);
