function Clock() {
    const fullDate = new Date();
    var Hours= fullDate.getHours();
    var Minutes= fullDate.getMinutes();
    var Seconds= fullDate.getSeconds();
    if(Hours<10) {
        Hours="0" + Hours;
    }
    if(Minutes<10) {
        Minutes="0" + Minutes;
    }
    if(Seconds<10) {
        Seconds="0" + Seconds;
    }
    document.getElementById('hour').innerHTML=Hours;
    document.getElementById('min').innerHTML=":" +Minutes;
    document.getElementById('sec').innerHTML=":" +Seconds;
    
};
setInterval(Clock, 100);