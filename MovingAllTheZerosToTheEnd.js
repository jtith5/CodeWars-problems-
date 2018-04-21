var moveZeros = function (arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i,1);
            arr.push(0);
        }
    }

    return arr;
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));