function disemvowel(str) {
    let vowel = ['a','A','e','E','i','I','o','O','u','U'];

    for (let i = 0; i < str.length; i++) {
        console.log("i is: " + i);
        let trollsVowel = str.substring(i, i+1);
        for (let j =0; j < vowel.length; j++) {
            console.log("j is: " + j);
            let currentVowel = vowel[j];
            console.log('Comapare ' + trollsVowel + ' to vowel: ' + currentVowel);
            if (trollsVowel === currentVowel) {
                console.log('replacing ' + trollsVowel + ' with a space' );
                str = str.replace(trollsVowel, '');
                console.log("String is now: " + str);
                i--;
                break;
            }
        }



    }
    return str;
}

console.log(disemvowel("Thuus"));

