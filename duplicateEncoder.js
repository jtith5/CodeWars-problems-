function duplicateEncode(word) {
    word = word.toLowerCase();
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (frequencyOf(word.substring(i, i + 1), word) > 1) {
            newWord = newWord + ")";
        } else {
            newWord = newWord + '(';
        }
    }
    return newWord;
}

function frequencyOf(character, string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) === character) {
            counter++;
        }
//console.log('frequency counter of ' + character + ' is ' + counter);}
    }
    return counter;
}

//console.log(frequencyOf("i", "brianiiiiii"));

console.log(duplicateEncode("recede"));