var array =["You","are","a","pretty","guy","."];

// for in 
for(var index in array){
    console.log(array[index]);
}

// for of
for(var i of array){
    console.log(i);
}

// forEach
array.forEach(function(element,index){
    console.log(element);
})