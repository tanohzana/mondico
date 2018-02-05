
const Mondico = class{
	constructor(word){
		this.dictionary = require("./words/dict");
		this.word = word;
	}

	wordExists(){
		if(this.dictionary.includes(this.word)){
			return true;
		}else{
			return false;
		}
	}

	edits1(){
		let letters = "abcdefghijklmnopqrstuvwxyz";
		let edits = [];

		// Deletes
		for (let i=0; i<this.word.length; i++){
			edits.push(this.word.substring(0,i)+this.word.substring(i+1));
		}

		// Transposes
		for(let i=0;i<this.word.length-1; i++){
			edits.push(this.word.substr(0,i)+this.word[i+1]+this.word[i]+this.word.substr(i+2));
		}

		// Replaces
		for(let i=0; i<this.word.length; i++){
			for(let j=0; j<letters.length; j++){
				edits.push(this.word.substr(0,i)+letters[j]+this.word.substr(i+1,this.word.length-i));
			}
		}

		// Inserts
		for(let i=0; i<this.word.length+1; i++){
			for(let j=0; j<letters.length; j++){
				edits.push(this.word.substr(0,i)+letters[j]+this.word.substr(i,this.word.length-i));
			}
		}

		return edits;
	}

	known(wordsToExamin){
		let knownWords = [];

		for(let i=0; i<wordsToExamin.length; i++){
			if(this.dictionary.includes(wordsToExamin[i])){
				knownWords.push(wordsToExamin[i]);
			}
		}

		console.log(knownWords);
	}
}


// tests

var dico = new Mondico("coucau");

if(!dico.wordExists()){
	let edits1 = dico.edits1();

	dico.known(edits1);

}
