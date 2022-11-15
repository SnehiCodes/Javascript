// array method some & every

const items = [
    {name : "Bike" , price :100},
    {name : "TV" , price :200},
    {name : "Album" , price :10},
    {name : "Book" , price :5},
    {name : "Phone" , price :500},
    {name : "Computer" , price :1000},
    {name : "Keyboard" , price :25}

]
const hasInexpensiveItems = items.some((item) =>{
    return item.price <=0
})
console.log(hasInexpensiveItems);

const hasInexpensiveItems1 = items.every((item) =>{
    return item.price <=1000
})
console.log(hasInexpensiveItems1);