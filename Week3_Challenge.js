const input = require(`readline-sync`);
let string = input.question("Enter a string for reversal: ");

function FirstReverse(str) { 

    // code goes here  
    let revStr = [];
    for(let i=str.length-1;i>=0;i--){
       revStr = revStr+str[i];
       console.log("Reversal: "+revStr);
    }
    return revStr; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(string));