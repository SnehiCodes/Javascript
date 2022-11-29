// Intersection of sets

function intersectSets (setA, setB){
    var intersection = new Set();
    for(var i of setB){
        if (setA.has(i)){
            intersection.add(i);
        }
    }
    return intersection;
}

var setA = new Set([1,5,7,8,0,34]);
var setB = new Set([1,34,56,19,0]);

console.log(intersectSets(setA,setB));