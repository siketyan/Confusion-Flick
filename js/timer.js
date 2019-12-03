function timerStart(interval){
	window.timerStartedAt = new Date();
	setInterval(timerTick,interval);
}