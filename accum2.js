function accum(s) {
    let string = "";
    for (let i = 1; i <= s.length; i++) {
        string = string + makeOneLetter(s.substring(i - 1, i), i);
        if (!onLastCharacter(i, s.length)) {
            string = addHyphen(string);
        }
    }
    return string;
}

function makeOneLetter(character, numberOfTimes) {
    if (numberOfTimes === 1) {
        return character.toUpperCase();
    }
    let string = character.toUpperCase();
    for (let i = 0; i < numberOfTimes - 1; i++) {
        string = string + character.toLowerCase();
    }
    return string;
}

function onLastCharacter(number1, number2) {
    return number1 === number2;
}

function addHyphen(string) {
    return string + "-";
}

// console.log(makeOneLetter("a" , 1));
// console.log(makeOneLetter("b" , 2));
// console.log(makeOneLetter("c", 3));
// console.log(makeOneLetter("d", 4));


//console.log(accum("abcD"));