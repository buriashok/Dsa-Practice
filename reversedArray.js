const arr = [23,56,78,99];

function reverseArray (a){
    const reversedArr = [];
    for(let i = a.length - 1; i >= 0; i--){
        reversedArr.push(a[i]);
    }
    return reversedArr;
}
console.log(`Original Array ${arr}`);
console.log(`Reversed Array ${reverseArray(arr)}`);
