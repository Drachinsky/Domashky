window.onload = function () {
    var textBlok = document.getElementById('blok');
    var textBlokItem = document.querySelectorAll('text-blok__item');
    var delBtn = document.querySelector('[type="button"]');
  
    
    textBlok.addEventListener('click', deletTextBlok);
 
    function deletTextBlok(e) {
        textBlokItem = e.target.parentElement;

        if (textBlokItem.classList.contains('text-blok__item')) {
            textBlokItem.remove();
        }
   
    }
}

