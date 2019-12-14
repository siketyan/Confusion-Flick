function gameSentenceNext(){
	var arrayIndex =Math.floor(Math.random()*(window.config.game.sentences).length)
	window.gameSentenceCurrent=window.config.game.sentences[arrayIndex];
	$("#display").text(window.gameSentenceCurrent);
	window.gameSentenceCursor=0;
}
function gameInputValidate(character){
	var SentenceCursor=(window.gameSentenceCurrent).charAt(window.gameSentenceCursor)
	if(SentenceCursor==character){
		window.gameSentenceCursor+=1;
		if(window.gameSentenceCursor>window.gameSentenceCurrent){
			gameSentenceNext();
		}else{
			var display_text = $("#display").text();
			display_text = display_text.slice(1);
			$("#display").text(display_text);
		}
	}
}