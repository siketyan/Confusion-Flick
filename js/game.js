function gameStart() {
    timerStart(window.config.timer.interval);
    gameSentenceNext();
}

function gameSentenceNext() {
    const arrayIndex = Math.floor(Math.random() * (window.config.game.sentences).length);
    window.gameSentenceCurrent = window.config.game.sentences[arrayIndex];
    $("#display").text(window.gameSentenceCurrent);
    window.gameSentenceCursor = 0;
}

function gameInputValidate(character) {
    const SentenceCursor = (window.gameSentenceCurrent).charAt(window.gameSentenceCursor);
    if (SentenceCursor === character) {
        window.gameSentenceCursor += 1;
        if (window.gameSentenceCursor >= window.gameSentenceCurrent.length) {
            gameSentenceNext();
        } else {
            const $display = $('#display');
            const display_text = $display.text().slice(1);
            $display.text(display_text);
        }
    }
}
