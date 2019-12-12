function keyboardTouchStart(position, element) {
    window.keyboardTouchStartedAt=position;
    window.keyboardTouchStartedOn=element;
}

function keyboardTouchMove(position) {
    window.keyboardTouchMoveAt = position;
} 

function keyboardSlideLeft(row){
     $('.keyboard-key')
     .filter(function() {
         return parseInt($(this).css('grid-row-start')) === row;
     })
     .css('grid-column-start', function(index, value) {
          const current = parseInt(value);
          return current === 1 ? window.config.keyboard.columns : current - 1;
      });
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
