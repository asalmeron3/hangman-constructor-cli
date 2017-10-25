//Make a constructor the will take in a string an convert the string into an array, 
// replace all the lettes with hypens, and then join all the hypens. This will be
// used to display a hidden word/phrase for the user to play hangman
function Word(theWord){
	//making  a skeleton for the word's place holders: lines & spaces
	this.theSkeleton = [];

	//splitting the word into an array
	this.wordArray = theWord.split("");

	this.composeString = function(){
		//looping through the array to check each character
		for (i = 0; i < theWord.length; i++){

			//if the character is a letter then insert an underscore into theSkeleton
			if(this.wordArray[i].toLowerCase() >= "a" && this.wordArray[i].toLowerCase() <= "z"){
				this.theSkeleton.push("-");
			}

			//if the character is not a letter, push that character to the skeleton
			else{
				this.theSkeleton.push(this.wordArray[i]);
			}
		} //end of For
		var myHiddenWord =  this.theSkeleton.join("");
		return myHiddenWord
	};
};

module.exports = Word;