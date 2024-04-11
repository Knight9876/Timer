var set_btn = document.querySelector(".set-button");
var stop_btn = document.querySelector(".stop-button");
var start_btn = document.querySelector(".start-button");
var reset_btn = document.querySelector(".reset-button");
var change_value = document.querySelector(".change-value");
var components = document.querySelector(".components");
var timer = document.querySelector(".timer");
var inputs = document.querySelector(".inputs");
var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var time, days, hours, minutes, seconds, dys, hrs, mins, secs, sep_1, sep_2, sep_3, dd, hh, mm, ss;

function setTimer () {
    
    if (isNaN(day.value) || isNaN(hour.value) || isNaN(minute.value) || isNaN(second.value)) {
        alert("Please enter a number !!!!!");
        day.value = hour.value = minute.value = second.value = "";
    }
    else {
        timer.style.visibility = "visible";
        inputs.style.visibility = "hidden";
        stop_btn.style.visibility = "visible";
        start_btn.style.visibility = "hidden";
        components.style.visibility = "hidden";
        change_value.style.visibility = "visible";
        reset_btn.style.visibility = "visible"
        set_btn.style.visibility = "hidden";
        dys = day.value
        hrs = hour.value;
        mins = minute.value;
        secs = second.value;
    
        if (dys == 0) {
            dys = "00";
        }
    
        if (hrs == 0) {
            hrs = "00";
        }
        
        if (mins == 0) {
            mins = "00";
        }
    
        if (secs == 0) {
            secs = "00";
        }
        
        if(secs >= 60) {
            secs = 59;
        }
        
        if(mins >= 60) {
            mins = 59;
        }
    
        if(hrs >= 24) {
            hrs = 23;
        }
    
        if (secs <= -1) {
            secs = "00";
        }
        
        if (mins <= -1) {
            mins = "00";
        }
        
        if (hrs <= -1) {
            hrs = "00";
        }
        
        if (dys <= -1) {
            dys = "00";
        }
        
        days = document.createElement("h1");
        days.classList.add("dys");
        days.innerHTML = dys;
        timer.appendChild(days);
        
        sep_1 = document.createElement("h1");
        sep_1.classList.add("seperator");
        sep_1.innerHTML = " : "
        sep_1.style.fontSize = "6.5rem";
        sep_1.style.marginTop = "3rem"
        sep_1.style.marginLeft = "-0.5rem"
        timer.appendChild(sep_1);
    
        hours = document.createElement("h1");
        hours.classList.add("hrs");
        hours.innerHTML = hrs;
        timer.appendChild(hours);
    
        sep_2 = document.createElement("h1");
        sep_2.classList.add("seperator");
        sep_2.innerHTML = " : "
        sep_2.style.fontSize = "6.5rem";
        sep_2.style.marginTop = "3rem"
        sep_2.style.marginLeft = "-0.5rem"
        timer.appendChild(sep_2);
        
        minutes = document.createElement("h1");
        minutes.classList.add("mins");
        minutes.innerHTML = mins;
        timer.appendChild(minutes);
        
        sep_3 = document.createElement("h1");
        sep_3.classList.add("seperator");
        sep_3.innerHTML = " : "
        sep_3.style.fontSize = "6.5rem";
        sep_3.style.marginTop = "3rem"
        sep_3.style.marginLeft = "-0.5rem"
        timer.appendChild(sep_3);
        
        seconds = document.createElement("h1");
        seconds.classList.add("secs");
        seconds.innerHTML = secs;
        timer.appendChild(seconds);
        
    
        time = setInterval ( () => {
            
            if (secs == "00") {
                if (mins == "00") {
                    if (hrs == "00") {
                        if (dys == "00") {
                            reset();
                        }
                        else {
                            dys -= 1;
                            hrs = 23;
                            mins = 59;
                            secs = 59;
                            if (dys == 0 || dys == 1 || dys == 2 || dys == 3 || dys == 4 || dys == 5 || dys == 6 || dys == 7 || dys == 8 || dys == 9 ) {
                                dys = `0${dys}`;
                            }
                            days.innerHTML = dys;
                            hours.innerHTML = hrs;
                            minutes.innerHTML = mins;
                            seconds.innerHTML = secs;
                        }
                    }
                    else {
                        hrs -= 1;
                        mins = 59;
                        secs = 59;
                        if (hrs == 0 || hrs == 1 || hrs == 2 || hrs == 3 || hrs == 4 || hrs == 5 || hrs == 6 || hrs == 7 || hrs == 8 || hrs == 9 ) {
                            hrs = `0${hrs}`;
                        }
                        hours.innerHTML = hrs;
                        minutes.innerHTML = mins;
                        seconds.innerHTML = secs;
                    }
                }
                else {
                    mins -= 1;
                    secs = 59;
                    if (mins <= -1) {
                        mins = "00";
                    }
                    if (mins == 0 || mins == 1 || mins == 2 || mins == 3 || mins == 4 || mins == 5 || mins == 6 || mins == 7 || mins == 8 || mins == 9 ) {
                        mins = `0${mins}`;
                    }
                    minutes.innerHTML = mins;
                    seconds.innerHTML = secs;
                }
            }
            else {
                secs -= 1;
                if (secs == 0 || secs == 1 || secs == 2 || secs == 3 || secs == 4 || secs == 5 || secs == 6 || secs == 7 || secs == 8 || secs == 9 ) {
                    secs = `0${secs}`;
                }
                seconds.innerHTML = secs;
            }     
        }, 1000);
    }

    function mq720 (mq) {
        if (mq.matches) {
            sep_1.style.marginTop = sep_2.style.marginTop = sep_3.style.marginTop = "0.4rem";
            sep_1.style.marginLeft = sep_2.style.marginLeft = sep_3.style.marginLeft = "0.1rem";
            sep_1.style.fontSize = sep_2.style.fontSize = sep_3.style.fontSize = "4rem";
        }
    }
    
    var mq = matchMedia("(max-width: 720px)");
    mq720(mq);
    
    function mq429 (mq1) {
        if (mq1.matches) {
            sep_1.style.marginTop = sep_2.style.marginTop = sep_3.style.marginTop = "0.4rem";
            sep_1.style.marginLeft = sep_2.style.marginLeft = sep_3.style.marginLeft = "1rem";
            sep_1.style.fontSize = sep_2.style.fontSize = sep_3.style.fontSize = "4rem";
        }
    }
    
    var mq1 = matchMedia("(max-width: 429px)");
    mq429(mq1);
}

function stopTimer () {
    start_btn.style.visibility = "visible";
    stop_btn.style.visibility = "hidden";
    clearInterval(time);
    day.value = dys
    hour.value = hrs;
    minute.value = mins;
    second.value = secs;
}

function removeElements () {
    days.remove()
    sep_1.remove()
    hours.remove();
    sep_2.remove()
    minutes.remove();
    sep_3.remove();
    seconds.remove();
}

function startTimer () {
    removeElements();
    setTimer();
}

function resetTimer () {
    stopTimer();
    removeElements();
}

function reset () {
    if (dys == "00" && hrs == "00" && mins == "00" && secs == "00") {
        alert("Time's up !!!!!");
    }
    stopTimer();
    timer.style.visibility = "hidden";
    inputs.style.visibility = "visible";
    stop_btn.style.visibility = "hidden";
    start_btn.style.visibility = "hidden";
    components.style.visibility = "visible";
    reset_btn.style.visibility = "hidden";
    change_value.style.visibility = "hidden";
    set_btn.style.visibility = "visible";
    day.value = hour.value = minute.value = second.value = "";
    removeElements();
}

function incDay () {
    dd = Number(dys);
    dd += 1;
    if (dys == 0 || dys == 1 || dys == 2 || dys == 3 || dys == 4 || dys == 5 || dys == 6 || dys == 7 || dys == 8 ) {
        dys = `0${dd}`;
    }
    else {
        dys = dd;
    }
    resetTimer();
    setTimer();
}

function incHour () {
    hh = Number(hrs);
    hh += 1;
    if (hrs == 0 || hrs == 1 || hrs == 2 || hrs == 3 || hrs == 4 || hrs == 5 || hrs == 6 || hrs == 7 || hrs == 8 ) {
        hrs = `0${hh}`;
    }
    else {
        hrs = hh;
    }
    resetTimer();
    setTimer();
}

function incMinute () {
    mm = Number(mins);
    mm += 1;
    if (mins == 0 || mins == 1 || mins == 2 || mins == 3 || mins == 4 || mins == 5 || mins == 6 || mins == 7 || mins == 8 ) {
        mins = `0${mm}`;
    }
    else {
        mins = mm;
    }
    resetTimer();
    setTimer();
}

function incSecond () {
    ss = Number(secs);
    ss += 1;
    if (secs == 0 || secs == 1 || secs == 2 || secs == 3 || secs == 4 || secs == 5 || secs == 6 || secs == 7 || secs == 8 ) {
        secs = `0${ss}`;
    }
    else {
        secs = ss;
    }
    resetTimer();
    setTimer();
}

function decDay () {
    hh = Number(dys);
    hh -= 1;
    if(dys <= -1) {
        dys = "00";
    }
    else {
        if ( dys == 1 || dys == 2 || dys == 3 || dys == 4 || dys == 5 || dys == 6 || dys == 7 || dys == 8 || dys == 9 || dys == 10 ) {
            dys = `0${hh}`;
        }
        else {
            dys = hh;
        }
    }
    resetTimer();
    setTimer();
}

function decHour () {
    dd = Number(hrs);
    dd -= 1;
    if(hrs <= -1) {
        hrs = "00";
    }
    else {
        if ( hrs == 1 || hrs == 2 || hrs == 3 || hrs == 4 || hrs == 5 || hrs == 6 || hrs == 7 || hrs == 8 || hrs == 9 || hrs == 10 ) {
            hrs = `0${dd}`;
        }
        else {
            hrs = dd;
        }
    }
    resetTimer();
    setTimer();
}

function decMinute () {
    mm = Number(mins);
    mm -= 1;
    if (mins <= -1) {
        mins = "00";
    }
    else {
        if ( mins == 1 || mins == 2 || mins == 3 || mins == 4 || mins == 5 || mins == 6 || mins == 7 || mins == 8 || mins == 9 || mins == 10 ) {
            mins = `0${mm}`;
        }
        else {
            mins = mm;
        }
    }
    
    resetTimer();
    setTimer();
}

function decSecond () {
    ss = Number(secs);
    ss -= 1;
    if (secs <= -1) {
        secs == "00";
    }
    else {
        if ( secs == 1 || secs == 2 || secs == 3 || secs == 4 || secs == 5 || secs == 6 || secs == 7 || secs == 8 || secs == 9 || secs == 10 ) {
            secs = `0${ss}`;
        }
        else {
            secs = ss;
        }
    }
    resetTimer();
    setTimer();
}

// function mq720 (mq) {
//     if (mq.matches) {
//         sep_1.remove();
//         sep_2.remove();
//         sep_3.remove();
//     }
// }

// var mq = matchMedia("(max-width: 720px)");
// mq720(mq);
// mq.addListener(mq720);