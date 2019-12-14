function timerStart(interval) {
    window.timerStartedAt = new Date();
    window.timerHandle = setInterval(timerTick, interval);
}

function timerProgress(estimated, limit) {
    //perはパーセント
    const remaining = limit - estimated;
    const per = remaining / limit * 100;
    const $progress = $('#timer-progress');

    if (per <= 0) {
        gameFinish();
        return;
    }

    $progress
        .css('width', per.toString() + '%')
        .text(Math.floor(remaining / 1000));

    if (remaining <= 10000) {
        $progress.addClass('bg-danger');
    } else if (remaining <= 20000) {
        $progress.addClass('bg-warning');
    }
}

function timerTick() {
    const d1 = new Date();
    const diffTime = d1.getTime() - window.timerStartedAt.getTime();
    timerProgress(diffTime, window.config.timer.limit);
}

function timerStop() {
    clearInterval(window.timerHandle);
}
