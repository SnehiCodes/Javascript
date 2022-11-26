// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name = value pairs

//document.cookie = "firstName = Spongebob;expires = Sun , 1 January 2024 12:00:00 GMT; path=/";
//document.cookie = "lasttName = Squarepants;expires = Sun , 1 January 2014 12:00:00 GMT; path=/";
//console.log(document.cookie);

setCookie("email","Sponge@gmail.com",365);
console.log(document.cookie)

setCookie("firstName","SpongeBob",365);

deleteCookie("firstName");
deleteCookie("lastName");
deleteCookie("email");

function setCookie(name,value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime()+ daysToLive*24*60*60*1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie= `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name,null,null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    console.log(cDecoded);
}