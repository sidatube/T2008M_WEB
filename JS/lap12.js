

function TimerCountdown() {
    var ip = document.getElementById("input-time");
    // var min = parseInt(ip.value);
    // if(isNaN(min)){
    //     min = 0;
    // }
    var min = isNaN(parseInt(ip.value))?0:parseInt(ip.value);
    var sec = 0;
    var st = setInterval(function () {
        var spanMin = document.getElementById("min");
        var spanSec = document.getElementById("sec");
        spanMin.innerText = min>=10?min:"0"+min;
        spanSec.innerText = sec>=10?sec:"0"+sec;
        sec--;
        if(sec<0){
            sec=59;
            min--;
        }
        if(min<0){
            clearInterval(st);
            var wrn = document.getElementById("warning");
            wrn.innerText = "Bùm.....";
        }
    },1000);
}






////// đồng hồ chạy
function ClockTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var spanHour = document.getElementById("hour");
    var spanMinute= document.getElementById("minute");
    var spanSecond= document.getElementById("second");
    setInterval(function () {
        spanHour.innerText = h;
        spanMinute.innerText=m;
        spanSecond.innerText= s;
        s++;
        if(s>59){
            s=0;
            min++;
        }
        if(min>59){
            min=0;
            h++;
        }
        if(h>23){
            h=0;
        }
    },1000);
}
