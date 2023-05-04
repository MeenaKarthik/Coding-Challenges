const input = require('readline-sync');
let str = input.question("Enter a sentence for finding longest word: ");

function LongestWord(sen) { 
    // code goes here  
    if(sen){
    let regexMatched = '';
    let wordsArray = [];
    
    regexMatched = sen.replace(/[^a-z0-9 ]/gi,'');
    console.log('regexMatched: '+regexMatched);
    wordsArray = regexMatched.split(' ');
    console.log('wordsArray: '+wordsArray);

    let longestWord = wordsArray[0];
    console.log("initially let longest word is "+longestWord);
    for(let i=0; i<wordsArray.length-1;i++){
        let nextWord = wordsArray[i+1];
        if(longestWord.length< nextWord.length){
            longestWord = nextWord;
            console.log("inside condition longest word is "+longestWord);
        }       
    }
    return longestWord; 
    }else
    return 'The given string is falsy';
    
  } 
  // keep this function call here 
  //console.log(LongestWord(readline()));
  console.log(LongestWord(str));
