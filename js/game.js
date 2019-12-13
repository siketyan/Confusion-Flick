function gameSentenceNext(){
	var arrayIndex =Math.floor(Math.random()*(window.config.game.sentences).length)
	window.gameSentenceCurrent=window.config.game.sentences[arrayIndex];
	$("#display").text(window.gameSentenceCurrent);
	window.gameSentenceCursor=0;
}
function gameInputValidate(character){
	A=(window.gameSentenceCurrent).charAt(window.gameSentenceCursor)
	if(A==character){
		window.gameSentenceCursor+=1;
		if(window.gameSentenceCursor>window.gameSentenceCurrent){
			gameSentenceNext();
		}else{
			$("#display").text
		}
	}
}