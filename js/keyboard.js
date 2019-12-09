function keyboardSlideDown(position){
    window.keyboardTouchMoveAT = position;
}
function keyboardslideUp(column){
    $('.keyboard-key')
        .filter(function(){
            return parseInt($(this).css('grid-column-start'))
== column;
        })
        .css('grid-row-start',function(index,value){
            const current = parseInt(value);
            return current === window.config.keyboard.rows ? 1
:current + 1;
        });
}