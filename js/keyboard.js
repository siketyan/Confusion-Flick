function keyboardTouchStart(position, element) {
    window.keyboardTouchStartedAt=position;
    window.keyboardTouchStartedOn=element;
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
