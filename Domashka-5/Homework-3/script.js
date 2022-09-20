window.onload = function () {
    var mainDiv = document.getElementById("main-div");
    var tooltipElem;   

    mainDiv.addEventListener('mouseover', openTooltip);
    mainDiv.addEventListener('mouseout', closeTooltip);   

    function openTooltip(e) {
        target = e && e.target;
        var tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;

        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltipHtml;
        document.body.append(tooltipElem);
    }

    function closeTooltip(e) {
        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
          }
    }  
};