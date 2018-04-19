function findMissingLetter(array) {
//     let characterCase = determineCase(array);
//     let alphabet;
//     let missingCharacter;
//     if (characterCase === "uppercase") {
//         alphabet = alphabetArray(true);
//     }
//     else {
//         alphabet = alphabetArray(false);
//     }
//     let alphabetStartingIndex = findAlphabetStartingIndex(alphabet, array);
//     missingCharacter = findCharacter(alphabetStartingIndex, alphabet, array);
//     return missingCharacter;
// }
//
// function findCharacter(alphabetStartingIndex, alphabet, array) {
//     for (let i = alphabetStartingIndex, j = 0; i < alphabet.length; i++, j++) {
//         console.log("Comparing " + alphabet[i] + " to " + array[j]);
//         if (alphabet[i] !== array[j]) {
//             console.log("Missing Character found!");
//             return alphabet[i];
//         }
//     }
//     return "Error from findCharacter() function!";
// }
//
// function alphabetArray(isUpperCase) {
//     let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     if (isUpperCase) {
//         let alphabetUpperCase = [];
//         for (let i = 0; i < alphabet.length; i++) {
//             alphabetUpperCase.push(alphabet[i].toUpperCase());
//         }
//         alphabet = alphabetUpperCase;
//     }
//     return alphabet;
// }
//
// function determineCase(array) {
//     let character = array[0];
//     let upperCaseCharacter = array[0].toUpperCase();
//     if (character === upperCaseCharacter) {
//         return "uppercase";
//     }
//     return "lowercase";
// }
//
// function findAlphabetStartingIndex(alphabet, array) {
//     let currentAlphabetCharacter = '';
//     let comparisonArrayCharacter = array[0];
//     for (let i = 0; i < alphabet.length; i++) {
//         currentAlphabetCharacter = alphabet[i];
//         console.log('comparing ' + currentAlphabetCharacter + ' to ' + comparisonArrayCharacter);
//         if (currentAlphabetCharacter === comparisonArrayCharacter) {
//             console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%% alphabet = array');
//             return i;
//         }
//     }
//     return "Can't find starting position";
// }
//
// let array1 = ['w','x','z'];
// let array2 = ['O','Q','R','S'];
//
// //console.log(findAlphabetStartingIndex(alphabetArray(false), array1));
//
// // console.log(determineCase(array1));
// // console.log(determineCase(array2));
// // console.log(alphabetArray(true));
// // console.log(alphabetArray(false));
//
// //console.log(findMissingLetter(array1));
// //console.log(findMissingLetter(array2));