const input = require('readline-sync');
let n = input.question("Enter a number between 1 and 1000: ");

function addUpTillNumber(num){
    
    if(num>=1 && num<=1000){
    let sum = 0;
    for(let i=1;i<=num;i++){
       sum +=i;
    }
    console.log("sum = "+sum);
    return sum;
    }
    else
    return "please enter a valid number between 1 and 1000";
}

console.log(addUpTillNumber(n));