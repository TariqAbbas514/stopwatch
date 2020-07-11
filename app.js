
var min = 00;
var sec = 00;
var msec = 00;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
function timer(){
	msec++;
	msecHeading.innerHTML = msec;
    if (msec >= 100) {
    	sec++;
    	secHeading.innerHTML = sec;
    	msec = 00;
    }else if(sec >= 60){
    	min++
    	sec = 00;
    	minHeading.innerHTML = min
    }
}
const btn1 = document.getElementById("start");
const btn2 = document.getElementById("stop");
const btn3 = document.getElementById("reset");
	btn2.disabled = true;
	btn3.disabled = true;

function start(){
	interval = setInterval(timer, 10) 
    btn1.disabled = true;
    btn2.disabled = false;
}

function stop() {
	clearInterval(interval);
	btn1.disabled = false;
	btn3.disabled = false;
}
function reset(){
	min = 00;
	sec = 00;
	msec = 00;
	minHeading.innerHTML = min;
	secHeading.innerHTML = sec;
	msecHeading.innerHTML = msec;
    stop();
    btn1.disabled = false;
    btn2.disabled = true;
    btn3.disabled = true;
}
