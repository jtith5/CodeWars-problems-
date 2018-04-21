function deleteNth(arr,n){
    let returnArray = [];
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let numberOfCurrentItemInReturnArray = containsHowManyItems(returnArray, currentItem);
       // console.log("Current item is: " + currentItem + ".");
        //console.log("Return array currently has " + numberOfCurrentItemInReturnArray + " " + currentItem + "'s. Maximum number of " + currentItem + "'s allowed is " + n + ".");
        if (numberOfCurrentItemInReturnArray < n) {
          //  console.log("Pushing " + currentItem + " to the return array.");
            returnArray.push(currentItem);
            //console.log(returnArray);
        }
        //console.log("\n");
    }
    return returnArray;
}


function containsHowManyItems(array, item) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let currentItem = array[i];
        if (currentItem === item) {
            counter++;
        }
    }
    return counter;
}

let arr = [20,37,20,21];

let n = 1;

console.log(deleteNth(arr, n));