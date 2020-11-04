
var ip=null;
var min=null;
var st=null;
var sec = null;

function start1() {
    var basvad =0;
    ip = document.getElementById("nhap-gio");
    if (sec == null) {
        sec = 0
    }
    if (min == null){
        min = isNaN(parseInt(ip.value)) ? 0 : parseInt(ip.value);
    }
    var spanMin = document.getElementById("min");
    var spanSec = document.getElementById("sec");

    if(sec<0){
        min--;
        sec = 59;
    }
    if(min<0){
        clearInterval(st);
        var wrn = document.getElementById("warning");
        wrn.innerText = "Bùm.....";
    }
    // hiện giờ
    spanMin.innerText = min>=10?min:"0"+min;
    spanSec.innerText = sec>=10?sec:"0"+sec;

    st = setTimeout(function () {
        sec--;
        start1()
    },1000);
}
function pause1(){

    clearInterval(st);
    var wrm = document.getElementById("warning");
    wrm.innerText = "Hack đã được bật! Ấn start để tiếp tục...";

}
function stop(){
    clearInterval(st);
    ip=null;
    min=null;
    st=null;sec =null;
    document.getElementById("min").innerText = "00"
    document.getElementById("sec").innerText = "00"
    var wr = document.getElementById("warning");
    wr.innerText = "Bùm Chíu...";
}