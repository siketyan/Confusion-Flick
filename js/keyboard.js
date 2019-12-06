function keyboardSlideLeft(row) {
     Replacement = $(".keyboard-rows").children().eq(row).children();
     $("Replacement keyboard-key:first").insertAfter("Replacement keyboard-key:last");
}
