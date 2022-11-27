// counting the number of characters in a string
//"
var str = "Snehi is the nicest person I've ever met.I tend to out do myself every time.";
var count = 0;
var pos = str.indexOf("e");


while (pos !== -1){
    count ++;
    console.log(pos);
    pos = str.indexOf("e",pos+1);
}
console.log(count);
