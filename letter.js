var inquirer = require("inquirer");
var randomSong = require("./randomSong.js");
var word = require("./word.js");

var theHint;
var hintCount;
var askCount;
var theWord;
var letterGuesses;

run();


function letter(linesForGuessing){
	this.count = 10;
	this.allGuesses = [];
	this.skeletonToFill = linesForGuessing;
	
	this.showUserThis = function(){
		var msg ="_____________________ \n\n"     
		+ "     Your Current Guesses are: "
		+ "\n     [ " + this.allGuesses + " ]"
		+ "\n \n     You have "+ this.count + " guesses left."
		+ "\n \n     The word(s) to guess:    " + this.skeletonToFill 
		+"\n_____________________ \n\n" ;

		console.log(msg);
	};

}

function run (){
	randomSong(function(myValues){
		var artistNsong = myValues;
		hintCount = 1;
		askCount =2;
		theHint = artistNsong[0];
		theWord = artistNsong[1];

		var hidden = new word(theWord);
		var hideString = hidden.composeString();
		console.log("The solution (for testing): " + theWord);
	
		letterGuesses = new  letter(hideString);
		checkTheGuess(theWord, letterGuesses);
	});
	
};

function wannaHint(theHint){
	askCount--;
	inquirer.prompt([
      {
      	type: "rawlist",
        name: "hint",
        message: "Would you like a hint?",
        choices: ["Yes","No"]
      }
    ]).then(function(answer) {
      if (answer.hint =="Yes"){
      	hintCount = 0;
      	console.log(
      		"\n\n *******      Your Hint     ********"
      		+ "\n     Song by Artist(s):  "+ theHint 
      		+ "\n\n ***********************************");
      }
      checkTheGuess(theWord,letterGuesses);
    });
}

function playAgain(msg){
	inquirer.prompt([
      {
      	type: "confirm",
        name: "endGame",
        message: msg
      }
    ]).then(function(answers) {
      if (answers.endGame){
      	run();
      }

      else {
      	process.exit();
      }

    });
}

function checkTheGuess(theWord, letterObj){


	letterObj.showUserThis();

	if (letterObj.count>0 && letterObj.skeletonToFill !=theWord){
		if (letterObj.count ==5 && hintCount ==1 && askCount==2){
			wannaHint(theHint);
			return;

		}
		else if(letterObj.count ==3 && hintCount && askCount==1){
			wannaHint(theHint);
			return;
		}

		    inquirer.prompt([
		    	{
		        	name: "UserGuess",
		        	message: "\n Your Next Guess: "	,
		        	validate: function(userInput){
		        		if (userInput.length ==1 
		        			&& userInput.toLowerCase() >= "a" 
		        			&& userInput.toLowerCase() <= "z"){
		        			return true;
		        		}
		        		else{
		    				console.log("\n Please guess a SINGLE letter. "
		    					+"Also, no special characters or numbers. \n\n ");
		    				return false;
		        		}
		        	}

		    	}
		    ]).then(function(answers) {
		    	var curGuess = answers.UserGuess.toLowerCase();
		    	var doesItMatch = theWord.indexOf(curGuess) != -1 
		    			|| theWord.indexOf(curGuess.toUpperCase()) != -1;

		    	
	    		if( letterObj.allGuesses.indexOf(curGuess) != -1){
	     			console.log("\n You have already guessed this letter. "
	     				+"Please guess another letter \n ");
	    		}
	    		else if (doesItMatch){
	    			letterObj.allGuesses.push(curGuess);

			      	for (i = 0; i < theWord.length; i++){

						if(theWord[i].toLowerCase() ===curGuess){
							var splitFirst = letterObj.skeletonToFill.split("");
							
							splitFirst[i] = theWord[i];

							letterObj.skeletonToFill = splitFirst.join("");
						}
					}
	    		}
	    		else{

	    			letterObj.allGuesses.push(curGuess);
					letterObj.count -= 1;

				}
				checkTheGuess(theWord,letterObj);

	    	}); //end of then(function(){})
		} //end of if(count>0)

  else if (letterObj.count ==0){

    var msgToUser = " \n You are  ALL OUT ut of guesses."
    	+ "\n\n The correct answer is: " + theWord 
    	+ "\n\n Would you like to Play Again?";
 	playAgain(msgToUser);

  }// end of else if

  else if (letterObj.skeletonToFill ===theWord){
  	var msgToUser = "\n You WIN!!! Would you like to play again?";
  	playAgain(msgToUser);

  }
}
