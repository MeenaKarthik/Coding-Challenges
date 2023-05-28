const input = require('readline-sync');
let str = input.question("Enter a word in lower case such that it is not in sequence and hides inside upper case letters: ");

function detectWord(str){
    
    str = str.match(/[a-zA-Z]/g);
    console.log("array of str: "+str);
    let hiddenstr = [];
    
    if(str){
        for(let i=0;i<str.length;i++){

            if(str[i] == str[i].toLowerCase()){
                hiddenstr.push(str[i]);
            }
        }

        if(hiddenstr.length>0)
        return hiddenstr.join('');  
        else
        return "no lowercase letters in the given input string";  
    } else {
        return "The input string doesn't contain any letter";
    }
}
console.log(detectWord(str));
