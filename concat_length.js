var array1 = [1,2,3,4];
console.log(array1.concat([5,6,7]));   // doesn't change the original array.

console.log("-------------------");
for(var i of array1){
    console.log(i);
}

console.log(array1); // to print the whole array
array1.length=9;
console.log("-------------------");
console.log(array1);