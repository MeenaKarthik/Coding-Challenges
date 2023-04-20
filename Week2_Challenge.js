let min, max;
let result;
function minMax(arr){
    //console.log(arr);
    min = arr[0];
    max = arr[arr.length-1];
    for(let i=0;i<arr.length;i++){ 
        if(min>arr[i+1]){
            min = arr[i+1];         
        }  
        if(max<arr[i]){
            max = arr[i];
        }   
    }

    result = [min,max];
    return result;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [2334454, 5];
let array3 = [9];
let array4 = [300,0,97,-45,67,-99]
console.log("minmax in "+array1+" : "+minMax(array1));
console.log("minmax in "+array2+" : "+minMax(array2));
console.log("minmax in "+array3+" : "+minMax(array3));
console.log("minmax in "+array4+" : "+minMax(array4));


