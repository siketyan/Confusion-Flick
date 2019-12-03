function timerStart(interval){
	window.timerStartedAt = new Date();
	setInterval(timerTick,interval);
}

function timerProgress(estimated, limit) {
    //perはパーセント
    per = (limit - estimated) / limit * 100;
    $('#time-progress').css('width', per);
}

function timerTick() {
  var d1 = new Date();
  var diffTime = d1.getTime() - window.timerStartedAt.getTime();
  timerProgress(diffTime,window.config.timer.limit);
}
