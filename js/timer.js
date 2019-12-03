function timerProgress(estimated, limit) {
    //perはパーセント
    per = (limit - estimated) / limit * 100;
    $('#time-progress').css('width', per);
}