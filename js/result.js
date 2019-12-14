function resultShow() {
    $('#result-sentences').text(window.gameSentenceCount);
    $('#result-characters').text(window.gameCharacterCount);
    $('#result-misses').text(window.gameMissCount);
}

function resultTweet() {
    const counts = [
        window.gameSentenceCount,
        window.gameCharacterCount,
        window.gameMissCount,
    ];

    const body = `Confusion Flick で ${counts[0]} つの問題 (${counts[1]} 文字) を ${counts[2]} ミスで入力しました！`;
    const suffix = '#Conflick https://conflick.now.sh/';
    const text = encodeURIComponent([body, suffix].join('\n'));

    window.open(
        'https://twitter.com/intent/tweet?text=' + text,
        '_blank'
    );
}
