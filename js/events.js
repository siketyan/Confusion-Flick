function registerEvents() {
    $(".page-move").click(function () {
        const page = $(this).data('page');
        const callback = page === 'game' ? gameStart : null;

        pageLoad(page, callback);
    });

    $(".keyboard-key").on('touchstart', function (event) {
        const position = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY,
        };
        keyboardTouchStart(position, this);
    })
        .on('touchend', keyboardTouchEnd);

    $(window).on('touchmove', function (event) {
        const position = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY,
        };
        keyboardTouchMove(position);
    });

    $('#result-tweet').click(function () {
        resultTweet();
    });
}
