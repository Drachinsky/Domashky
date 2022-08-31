var runBtn = document.querySelector('[value="Run"]');
var stopBtn = document.querySelector('[value="Stop"]');
var resetBtn = document.querySelector('[value="Reset"]')
var bloc = document.querySelector('Bloc');
var stopwatchList = document.querySelector('#list');
var count = 0;
var timer;
runBtn.onclick = runStopwatch;
stopBtn.onclick = stopStopwatch;
resetBtn.onclick = resetStopwatch;

function runStopwatch() {
  timer = setInterval(function(){
   count++;
   stopwatchList.textContent = count;
   if(count >= 30)
    clearInterval(timer)
  },1000);
}  

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  count = 0
  stopwatchList.textContent = count;
}