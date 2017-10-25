// Make a funtion that randomly selects song information from the
// file "listOf90sSongs.txt", stores the artist's name & the song name
	function randomSong(callBack){
		var whichSong = require("fs");

		//Read the file with utf8 & use a call back function to catch errors
		whichSong.readFile("listOf90sSongs.txt", "utf8", function(err,result){
			if(err){
				console.log(err);
			}
			else{
				
				// format the resulting data to be stored in an array; this is
				// done via split(","). 
				var allSongData = result.split(",");

				// Obtain a random number between 0 and 99 -->this will be the 
				// index for selecting song information
				console.log(allSongData.length);
				var aNum = Math.floor(Math.random()*allSongData.length);

				var songData = allSongData[aNum];

				// With the song info, split AGAIN but this time at the hyphen " - "
				var hintPlusSong = songData.split(" - ");

				// Return the now split array. Since this function is going to be ran
				// asynchronously, we have to use a specified callback function to grab
				// our array and use it later.... still learning about callbacks 
				callBack(hintPlusSong);
				
			}
		});
		
	}

module.exports = randomSong;