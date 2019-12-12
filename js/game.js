function gameSentenceNext(){
	var arrayIndex =Math.floor(Math.random()*(window.config.game.sentences).length)
	window.gameSentenceCurrent=window.config.game.sentences[arrayIndex];
	$("#display").text(window.gameSentenceCurrent);
	window.gameSentenceCursor=0;
}