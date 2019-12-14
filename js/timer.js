function timerStart(interval) {
    window.timerStartedAt = new Date();
    setInterval(timerTick, interval);
}

function timerProgress(estimated, limit) {
    //perはパーセント
    const per = (limit - estimated) / limit * 100;

    if (per <= 0) {
        gameFinish();
        return;
    }

    $('#timer-progress').css('width', per.toString() + '%');
}

function timerTick() {
    const d1 = new Date();
    const diffTime = d1.getTime() - window.timerStartedAt.getTime();
    timerProgress(diffTime, window.config.timer.limit);
}
