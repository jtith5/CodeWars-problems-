function sum_pairs(ints, s) {
    let pairIntegers = [];
    let permutationIntegers = [];
    let pairIntegersIndex = [];
    let totalPairIntegerIndex = [];
    for (let i = 0; i < ints.length; i++) {
        let prime = ints[i];
        for (let j =i + 1; j < ints.length; j++) {
           let secondary = ints[j];
            let sum = prime + secondary;
            console.log(prime + " + " + secondary + " = " + sum + "\n");
            if (sum === s) {
                console.log('found pair');
                pairIntegers = [prime, secondary];
                pairIntegersIndex = [ints.indexOf(prime, i), ints.indexOf(secondary, j)];
                totalPairIntegerIndex.push(pairIntegersIndex);
                console.log(totalPairIntegerIndex);

                let hi = totalPairIntegerIndex[0];
                permutationIntegers.push(pairIntegers);


            }
        }
    }
   return permutationIntegers;// console.log(pairIntegers);
}

function indexChecker (totalPairIntegerIndex) {
    for (let i = 0; i < totalPairIntegerIndex.length; i++) {
        let first = totalPairIntegerIndex[i];
        for (let j = i + 1; j < totalPairIntegerIndex.length; j++) {
            let second = totalPairIntegerIndex[j];
            console.log("First: " + first);
            console.log("Second: " + second);
            if (first[1] > second[1]) {
                totalPairIntegerIndex.splice(i, 1);
                console.log("New array: " + totalPairIntegerIndex);
            }
        }
    }
    return totalPairIntegerIndex;
}


// console.log(sum_pairs([10,5,2,3,7,5], 10));

console.log(indexChecker([1,5], [3,4]));