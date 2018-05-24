
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

	edits1(word){
		let letters = "abcdefghijklmnopqrstuvwxyz";
		let edits = [];

		// Deletes
		for (let i=0; i<word.length; i++){
			// edits.push(word.substring(0,i)+word.substring(i+1));
			let add = word.substring(0,i)+word.substring(i+1);
			if(!edits.includes(add)){
				edits.push(add);
			}
		}

		// Transposes
		for(let i=0;i<word.length-1; i++){
			// edits.push(word.substr(0,i)+word[i+1]+word[i]+word.substr(i+2));
			let add = word.substr(0,i)+word[i+1]+word[i]+word.substr(i+2);
			if(!edits.includes(add)){
				edits.push(add);
			}
		}

		// Replaces
		for(let i=0; i<word.length; i++){
			for(let j=0; j<letters.length; j++){
				// edits.push(word.substr(0,i)+letters[j]+word.substr(i+1,word.length-i));
				let add = word.substr(0,i)+letters[j]+word.substr(i+1,word.length-i);
				if(!edits.includes(add)){
					edits.push(add);
				}
			}
		}

		// Inserts
		for(let i=0; i<word.length+1; i++){
			for(let j=0; j<letters.length; j++){
				// edits.push(word.substr(0,i)+letters[j]+word.substr(i,word.length-i));
				let add = word.substr(0,i)+letters[j]+word.substr(i,word.length-i);
				if(!edits.includes(add)){
					edits.push(add);
				}
			}
		}

		return edits;
	}

	edits2(first_words){
		let new_edits = [];

		console.log("2", first_words.length);

		for(let i=0; i<first_words.length; i++){
			// new_edits = new_edits.concat(this.edits1(first_words[i]));
			let edits1 = this.edits1(first_words[i]);
			for(let j=0; j<edits1.length;j++){
				if(!new_edits.includes(edits1[j])){
					new_edits.push(edits1[j])
				}
			}
		}

		console.log("3", new_edits.length);

		return new_edits;
	}

	known(wordsToExamin){
		let knownWords = [];

		console.log("ENTERING KNOWN");

		for(let i=0; i<wordsToExamin.length; i++){
			if(this.dictionary.includes(wordsToExamin[i])){
				knownWords.push(wordsToExamin[i]);
			}
		}

		console.log("4", knownWords);
	}
}


// tests

var dico = new Mondico("coucau");

if(!dico.wordExists()){
	let edits1 = dico.edits1(dico.word);

	console.log(edits1.length);
	
	let edits2 = dico.edits2(edits1);

	console.log("OK1 - ", edits2.length);

	dico.known(edits2);

}
