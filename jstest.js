

function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.querySelector("#hours").innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(function() {currentTime()}, 1000)
    

}

function updateTime(k){
    if (k < 10){
        return k = "0"+k;
    }
    else {
        return k
    }
}

currentTime()
























