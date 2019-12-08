function registerEvents() {
	$(".page-move").click(function () {
		pageLoad($(this).data('page'));
    })

    $(".keyboard-key").on('touchstart',function(event){
	    var position = {
		    x : event.changedTouches[0].pageX,
		    y : event.changedTouches[0].pageY,
		}
	    keyboardTouchStart(position,this);
    })
    $("window").on('touchmove',function(event){
		    var position = {
		    x : event.changedTouches[0].pageX,
		    y : event.changedTouches[0].pageY,
		}
	    keyboardTouchMove(position);
	})
}
	