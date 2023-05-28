const input = require('readline-sync');
let inputWord = input.question("Enter a word in lower case such that it is not in sequence and hides inside upper case letters: ");

function detectWord(word){
    
    word = word.match(/[a-zA-Z]/g);
    console.log("array of word: "+word);
    let hiddenWord = [];
    
    if(word){
        for(let i=0;i<word.length;i++){

            if(word[i] == word[i].toLowerCase()){
                hiddenWord.push(word[i]);
            }
        }

        if(hiddenWord.length>0)
        return "Hidden word: "+hiddenWord.join('');  
        else
        return "no lowercase letters in the given input string";  
    } else {
        return "The input string doesn't contain any letter";
    }
}
console.log(detectWord(inputWord));
