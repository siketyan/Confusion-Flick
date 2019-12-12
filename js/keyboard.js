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
function keyboardResolveSlide() {
    var RelativeX = window.keyboardTouchStartedAt.x - window.keyboardTouchMoveAt.x;
    var RelativeY = window.keyboardTouchStartedAt.y - window.keyboardTouchMoveAt.y;
    var isX = Math.abs(RelativeX) > Math.abs(RelativeY) ? true : false;
    var distance = Math.abs(RelativeX) > Math.abs(RelativeY) ? RelativeX : RelativeY;
    if (window.config.keyboard.threshold > distance || RelativeX === RelativeY) {
        return;
    }
    //左スライドを呼ぶ
    if (isX && distance > 0) {
        keyboardSlideLeft(parseInt(
            $(window.keyboardTouchStartedOn).css('grid-row-start')
        ));
    }
    //右スライド
    else if (isX && distance < 0) {
        keyboardSlideRight(parseInt(
            $(window.keyboardTouchStartedOn).css("grid-row-start")
        ));
    }
    //上スライド
    else if (!isX && distance > 0) {
        keyboardSlideUp(parseInt(
            $(window.keyboardTouchStartedOn).css("grid-column-start")
        ));
    }
    //下スライド
    else {
        keyboardSlideDown(parseInt(
            $(window.keyboardTouchStartedOn).css("grid-column-start")
        ));
    }
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
