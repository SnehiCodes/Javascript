// using sets to check for duplicates in an array

function checkDuplicates (myArray){
    var mySet = new Set(myArray);
    return mySet.size<myArray.length;
}
console.log(checkDuplicates([1,2,3,4,5,4,5]));
console.log(checkDuplicates([2,7,9,0,6]));