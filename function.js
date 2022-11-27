function factorial(n){
    var p =1;
    for(var i=2;i<=n;i++)
        p *=i;
        return p;

}
console.log(factorial(4));

function square(n){
    return n*n;
}
console.log(square(12));

function fibno(n){

    var p=0;
    for(var i=1;i<=n;i++)
        p = p+i;
        return p;
}        
console.log(fibno(3));