# Hangman-Constructor-CLI

### Description
```
  This version of Hangman is played via a command-line interface (CLI).
  The game is built with the following constructor functions:

    1. "Word"
    2. "Letter"

```
- - -
### "Word"

  	* This constructor function is used to create an object representing the current word the user is attempting to guess.

- - -

### "Letter"
  	* This constructor function is used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

  	Within the Letter.js file:
  		1. run(): A function that 
  			* Calls that randomly picks a song from the listOf90sSongs.txt file
  			* Sets the global variables for all functions to use
  			* Calls the word() function to construct an object of the new word
  			* Calls the letter() function to construct an object for the user's guesses and the message to display
		2. wannaHint(): A function that 
			* Prompts the user to ask if they would like a hint
			* Runs the checkTheGuess() function again
		3. playAgain(): A function that
			* Prompts the user when they have WON or when they have ran out of guesses. This will either run the run() function or exit the node process
		4. checkTheGuess(): A function that
			* Will run the wannaHint() functions when the user has 5 or 3 guesses left. Only one hint will be given.
			* Will prompt the user for their next guess. This prompt is validated to confirm the user is entering a single alphabet character.
			* Once validated:
				* The user is notified that the letter has been guessed
				* The guess is revealed if part of the word & added to the array of previous guesses
				* The guess is added to the array of previous guess and the number of guesses is reduced by 1
			* Will prompt the user when he is out of guesses &  run playAgain()
			* Will prompt the user when he has guessed the song correctly & run playAgain()
- - -


### Notes
  * This function uses constructors and callbacks.

- - -

### System Requirements

You will need the following:
  * Node_modules
  
- - -

### Creator: Arturo Salmeron
**Date: October 14, 2017**
