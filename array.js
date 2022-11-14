var array1 = [1,2,3,4,5,6,7,8,9];

array1.push(10);  // add an element at theback of an array

array1.pop();     // remove the last element

for(var i=0,len= array1.length;i<len;i++){        // to print an array
    console.log(array1[i])
}

console.log(array1.shift());      // remove the first array and print it


// To access an element 
console.log(array1[3]);

