function keyboardTouchStart(position, element) {
    window.keyboardTouchStartedAt=position;
    window.keyboardTouchStartedOn=element;
}

function keyboardTouchEnd(){
    const direction = keyboardResolveFlick();

    keyboardResolveInput();
    keyboardSlide(direction);

    delete window.keyboardTouchStartedAt;
    delete window.keyboardTouchStartedOn;
    delete window.keyboardTouchMoveAt;
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

function keyboardSlide(direction) {
    switch (direction) {
        default:
        case -1:
        case 0:
            return;

        case 1:
            keyboardSlideLeft();
            break;

        case 2:
            keyboardSlideUp();
            break;

        case 3:
            keyboardSlideRight();
            break;

        case 4:
            keyboardSlideDown();
            break;
    }
}

function keyboardResolveFlick(){
    var RelativeX = window.keyboardTouchStartedAt.x - window.keyboardTouchMoveAt.x;
    var RelativeY = window.keyboardTouchStartedAt.y - window.keyboardTouchMoveAt.y;
    var isX = Math.abs(RelativeX) > Math.abs(RelativeY) ? true : false;
    var distance = Math.abs(RelativeX) > Math.abs(RelativeY) ? RelativeX : RelativeY;
    if (RelativeX === RelativeY) {
        return -1;
    }
    if(window.config.keyboard.threshold > Math.abs(distance)){
        return 0;
    }
    //左スライド
    if (isX && distance > 0) {
        return 1;
    }
    //上スライド
    else if (!isX && distance > 0) {
        return 2;
    }
    //右スライド
    else if (isX && distance < 0) {
        return 3;
    }
    //下スライド
    else {
        return 4;
    }
}
function keyboardResolveInput(){
    var direction = keyboardResolveFlick();
    var Characters = $(window.keyboardTouchStartedOn).data('characters').split(',');
    gameInputValidate(Characters[direction]);
}
