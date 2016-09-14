function reverseArray(array){
    var reversedArr = [];
    for (var i = array.length - 1; i >= 0; i -= 1) {
        reversedArr.push(array[i]);
    }
    return reversedArr;
}


function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i += 1) {
      var old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
        
    }
    return array
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);

console.log(arrayValue); // → [5, 4, 3, 2, 1]