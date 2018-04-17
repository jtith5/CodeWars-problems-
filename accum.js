function accum(s) {
    let returnString = "";
    let hyphen = '-';
    let extraNumberOfLetters = 0;
    let currentCharacter = "";

    for (let i = 0; i < s.length; i++) {
        console.log("i is: " + i);
        currentCharacter = s.substring(i, i + 1);
        console.log("Current character is: " + currentCharacter);
        extraNumberOfLetters = s.indexOf(currentCharacter, i);
        console.log("extra Number of : '" + currentCharacter + "'s is: " + extraNumberOfLetters);

        if (i === 0) {
            returnString = returnString + currentCharacter.toUpperCase() + hyphen;
        }
        else {
            returnString = returnString + currentCharacter.toUpperCase();
        }

        for (let x = 1; x <= extraNumberOfLetters; x++) {
            //console.log("x is " + x);
            //console.log("extraNumberOfLetters is " + extraNumberOfLetters);
            if (x === extraNumberOfLetters) {
                returnString = returnString + currentCharacter.toLowerCase() + hyphen;
            }
            else {
                returnString = returnString + currentCharacter.toLowerCase();
            }


        }
    }

    let length = returnString.length;

    returnString = returnString.substring(0, length - 1);

    return returnString;
    // your code
}
console.log(accum("abcd"));

