function divisors(integer) {
let wholeDivisors = [];
let result;
let remainder;
    for (let i = integer - 1; i >= 2; i--) {
        remainder = integer % i;
        if (remainder === 0) {
            result = integer / i;
            wholeDivisors.push(result);
        }
    }
    if (wholeDivisors.length === 0) {
        return integer + " is prime";
    }
    return wholeDivisors;
}

// function isPrime(aNumber) {
//     if (aNumber.isprime()) {
//         return true;
//     }
//     return false;
// }

console.log(divisors(29))