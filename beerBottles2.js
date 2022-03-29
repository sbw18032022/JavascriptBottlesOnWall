//	Bottles of beer song, javascript class.

class BeerSong {
	
	constructor(noBottles, content, wall){
		this.noBottles = noBottles;
		this.content = content;
		this.wall = wall;
		this.singularOrPlural = "bottles";
	}
	
	//	Check if the required word is a singular or plural.
	DetermineWord(ctr){
		this.singularOrPlural = ctr > 1 ? "bottles" : "bottle";
	}
	
	//	First lines of the song.
	FirstLines(){
		
		this.DetermineWord(this.noBottles);
		
		console.log("");
		console.log(this.noBottles + " " + this.singularOrPlural + " of " + this.content + " on the " + this.wall);
		console.log(this.noBottles + " " + this.singularOrPlural + " of " + this.content + "...");
	}
	
	//	Take a bottle of beer down and then pass it around...
	TakeOneDown(){
		this.noBottles -= 1;
		console.log("You take one down, pass it around...");
	}
	
	//	Determines the last line.
	LastLine(){
		
		this.DetermineWord(this.noBottles);
		
		if(this.noBottles != 0){
			
			console.log(this.noBottles + " " + this.singularOrPlural + " of "  + this.content + " left on the " + this.wall + ".");
			
		} else {
			
			console.log("");
			console.log("There are now no more bottles of " + this.content + " on the " + this.wall + ".");
			
		}
		
	}
	
	//	Sings the whole song.
	SingSong(){
		
		while(this.noBottles != 0){
			
			this.FirstLines();
			this.TakeOneDown();
			this.LastLine();
			
		}
		
	}
		
}

//	The number of bottles or verses in the song.
var bottles = 10;

//	What gets passed around.
var content = "beer";

//	What the bottles are on before getting passed around.
var wall = "wall";

//	Instance of beer song
var beers = new BeerSong(bottles, content, wall);

//	Sing the song!
beers.SingSong();