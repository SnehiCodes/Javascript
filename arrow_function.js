// arrow function = compact alternative to a traditional function
//       =>

const greeting = (userName)  => console.log(`Hello ${userName}`);
greeting("Bro");

// with two args
const percent = function(x,y){
    return x/y *100;
}
console.log(`${percent(75,150)}%`);

let grades = [100,50,90,60,80,70];
grades.sort((x,y) => y-x);
grades.forEach((i)=> console.log(i));