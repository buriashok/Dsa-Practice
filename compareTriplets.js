const a = [1, 2, 3];
const b = [3, 2, 1];

function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            aliceScore++;
        }else if(a[i] < b[i]){
            bobScore++;
        }
    }

    return [aliceScore, bobScore];
}

const result = compareTriplets(a, b);
console.log(result);