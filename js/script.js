var audio = document.getElementById('audio');
function loopAudio(startLength, timeLength) {
    console.log(startTime, timeLength); 
}

function loop() {
    var startTime = document.getElementById("startTime").value;
    var timeLength = document.getElementById("timeLength").value;
    
    setInterval(function() {loopAudio(startTime, timeLength);},timeLength*1000);
}

function seekTo(time) {
    player.seekTo(time, true);
}

var KeyFrameHandler = function() {
    
}

function setKeyframe() {
    var div = document.getElementById("keyframes");
    seekButton = document.createElement("button");
    var time = player.getCurrentTime();
    seekButton.innerHTML = time;
    seekButton.onclick = function() {seekTo(time)};
    div.appendChild(seekButton);
    console.log();    
}