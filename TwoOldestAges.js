function twoOldestAges(ages) {
    let maxNumber = Math.max(...ages);



    for (let i = 0; i < ages.length; i++) {
        if (ages[i] === maxNumber) {
            ages.splice(i, 1);

        }
    }
    let secondMaxNumber = Math.max(...ages);
    console.log([secondMaxNumber,maxNumber]);

    return [secondMaxNumber, maxNumber];
}

twoOldestAges([1, 2, 10, 8]);
