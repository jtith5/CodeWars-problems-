function duplicateCount(text){
    text = text.toLowerCase();
    let primaryCharacter = '';
    let comparisonCharacter = '';
    let numberOfDuplicates = 0;
    let foundMatches = [];
    for (let i = 0; i < text.length - 1; i++) {
        primaryCharacter = text.substring(i,i + 1);
        if (foundMatches.includes(primaryCharacter)) {
            console.log("Skipping " + primaryCharacter + " because it was already a duplicate.");
            continue;
        }
        console.log("Primary Character is now: " + primaryCharacter);
        for (let j = i + 1; j < text.length; j++) {
            comparisonCharacter = text.substring(j, j + 1)
            console.log("Comparison Character is now: " + comparisonCharacter);
            console.log("Comparing " + primaryCharacter + " to " + comparisonCharacter);

            if (primaryCharacter === comparisonCharacter) {
                console.log("*******************INCREASING NUMBER OF DUPLICATES**********************")
                numberOfDuplicates++;
                foundMatches.push(primaryCharacter);
                break;
             } // end if
        } // end inner for


        // if (text.substring(i,i + 1) === text.substring()) {
        //
        // }
    } // end outer for
    return numberOfDuplicates;
}

console.log(duplicateCount(''));
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('Indivisibilities'));