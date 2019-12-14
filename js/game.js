function gameStart() {
    window.gameSentenceCount = 0;
    window.gameCharacterCount = 0;
    window.gameMissCount = 0;

    timerStart(window.config.timer.interval);
    gameSentenceNext();
    gameUpdateStatus();
}

function gameSentenceNext() {
    const arrayIndex = Math.floor(Math.random() * (window.config.game.sentences).length);
    const $display = $('#display');

    window.gameSentenceCurrent = window.config.game.sentences[arrayIndex];
    window.gameSentenceCursor = 0;

    $display.empty();
    window.gameSentenceCurrent.split('').forEach(function (character) {
        $display.append(
            $('<span>').text(character)
        );
    });
}

function gameInputValidate(character) {
    const SentenceCursor = (window.gameSentenceCurrent).charAt(window.gameSentenceCursor);
    const $displaySpan = $('#display > span');

    if (SentenceCursor === character) {
        window.gameSentenceCursor += 1;
        window.gameCharacterCount++;
        if (window.gameSentenceCursor >= window.gameSentenceCurrent.length) {
            window.gameSentenceCount++;
            gameSentenceNext();
        } else {
            $displaySpan
                .eq(window.gameSentenceCursor - 1)
                .attr('class', 'text-success');
        }
    } else {
        window.gameMissCount++;

        $displaySpan
            .eq(window.gameSentenceCursor)
            .attr('class', 'text-danger');
    }

    gameUpdateStatus();
}

function gameFinish() {
    timerStop();
    pageLoad('result', resultShow);
}

function gameUpdateStatus() {
    $('#game-sentence-current').text(window.gameSentenceCount + 1);
    $('#game-miss-current').text(window.gameMissCount);
}
