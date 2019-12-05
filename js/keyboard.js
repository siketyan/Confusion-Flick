function keyboardTouchStart(position, element) {
    window.keyboardTouchStartedAt=position;
    window.keyboardTouchStartedOn=element;
}

function keyboardTouchMove(position) {
    window.keyboardTouchMoveAt = position;
}
