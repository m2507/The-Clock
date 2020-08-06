function showTime() {
    var date = new Date();
    var hr = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    var secs = date.getSeconds(); // 0 - 59
    var session = "am";

    if (hr == 0) {
        hr = 12;
    }

    if (hr > 12) {
        hr = hr - 12;
        session = "pm";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    secs = (secs < 10) ? "0" + secs : secs;

    var time = hr + ":" + min + ":" + secs + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();