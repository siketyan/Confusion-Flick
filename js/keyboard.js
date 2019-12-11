function keyboardTouchStart(position, element) {
    window.keyboardTouchStartedAt=position;
    window.keyboardTouchStartedOn=element;
}

function keyboardTouchMove(position) {
    window.keyboardTouchMoveAt = position;
}

function keyboardSlideUp(column) {
    $('.keyboard-key')
        .filter(function() {
            return parseInt($(this).css('grid-column-start')) === column;
        })
        .css('grid-row-start', function(index, value) {
            const current = parseInt(value);
            return current === 1 ? window.config.keyboard.rows : current - 1;
        });
}

function keyboardSlideDown(column) {
    $('.keyboard-key')
        .filter(function() {
            return parseInt($(this).css('grid-column-start')) === column;
        })
        .css('grid-row-start', function(index, value) {
            const current = parseInt(value);
            return current === window.config.keyboard.rows ? 1 : current + 1;
        });
}
