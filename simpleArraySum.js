const arr  = [23, 4, 45, 3, 1];

// function simpleArraySum (ar) {
//     let sum = 0;
//     function adder(number){
//         sum += number;
//     }
//     ar.forEach(adder);
//     return sum;
// }

// function simpleArraySum(ar) {
//     let sum = 0;
//     for (const number of ar) {
//         sum += number;
//     }
//     return sum;
// }

function simpleArraySum(ar) {
    return ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(simpleArraySum(arr));