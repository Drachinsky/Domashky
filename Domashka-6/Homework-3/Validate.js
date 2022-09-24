// регистрация события загрузки документа.
window.onload = function () {
    // if (window.addEventListener) window.addEventListener("load", init, false);
    // else if (window.attachEvent) window.attachEvent("onload", init);
    
    // регистрация обработчиков событий элементов формы.
    // function init() {
    //     form1.userName.onchange = nameOnChange;
    //     form1.email.onchange = emailOnChange;
    //     form1.zip.onchange = zipcodeOnChange;
    //     form1.onsubmit = onsubmitHandler;
    // }

    var form1 = document.querySelector('[name="form1"]');

    form1.userName.addEventListener('change', nameOnChange);
    form1.email.addEventListener('change', emailOnChange);
    form1.zip.addEventListener('change', zipcodeOnChange);
    form1.addEventListener('submit', onsubmitHandler);
    
    // метод проверки значения в элементе по регулярному выражению.
    function validate(elem, pattern) {
        var res = pattern.test(elem.value);
        if (res === false) {
            elem.className = "invalid";
        } // установка CSS класса 
        else {
            elem.className = "valid";
        }
    }
    
    // обработчики событий изменения текста в окне.
    function nameOnChange(e) {
        target = e && e.target;
        var tooltipHtml = target.value;
        if (tooltipHtml) {
            var pattern = /\S/;
            validate(this, pattern);
        };
    }
    
    function emailOnChange(e) {
        target = e && e.target;
        var tooltipHtml = target.value;
        if (tooltipHtml) {
            var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
            validate(this, pattern);
        }
    }
    
    function zipcodeOnChange(e) {
        target = e && e.target;
        var tooltipHtml = target.value;
        if (tooltipHtml) {
            var pattern = /\d{5}/;
            validate(this, pattern);
        };
    }
    
    // событие при отправке формы на сервер.
    function onsubmitHandler(event) {
    
        for (var i = 0; i < form1.elements.length; ++i) {
            if (form1.elements[i].type === "text")
                form1.elements[i].className = "valid";
        }
    
        var invalid = false;
    
        for (var i = 0; i < form1.elements.length; ++i) {
            var elem = form1.elements[i];
            // проверка типа элемента и наличия обработчика события onchange.
            if (elem.type == "text" && elem.onchange) {
                elem.onchange(); // запуск события onchange
                if (elem.className == "invalid") invalid = true;
            }
        }
    
        if (invalid) {
            alert("Допущены ошибки при заполнении формы.");
            event.preventDefault();
            return false; // отмена отправки формы.
        }
    }
}
