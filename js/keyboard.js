function keyboardTouchStart(position, element) {
    window.keyboardTouchStartedAt=position;
    window.keyboardTouchStartedOn=element;
}

function keyboardTouchMove(position) {
    window.keyboardTouchMoveAt = position;
}

function keyboardSlideRight(row){

	$('.keyboard-key')
	.filter(function(){

		return parseInt($(this).css('grid-row-start'))==row;

	})

	.css('grid-column-start',function(index,value){
		var current = parseInt(value);
		return current == window.config.keyboard.columns ? 1 : current+1;

	})

}