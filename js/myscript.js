// creating date object
var today= new Date();
// returns the hour (from 0 to 23) of the specified date and time  
var hourNow = today.getHours();
// variable declation
var greetings = "";
// console.log(today);
// console.log(hourNow); 

// if statment to define the graatings depends on the time
if (hourNow > 18 && hourNow < 24) {
    greetings= 'Good evening!';}
else if (hourNow > 12 && hourNow < 18 ) {
    greetings = ' Good afternoon!';}
else if (hourNow > 0 && hourNow < 12) {
    greetings = 'Good morning!';}
else {
    greetings = 'Welcome!' ;
}

document.write( "<h2>" + greetings + "</h2>");
// ------------------------------------------------------------
//function to make the user detrmine what he wants
var showOrder= function(){
    // input
    var userOrder = prompt ("what would you like to order hotel or house?");
    var orderImage = "";
    // if the input wasnt house or hotel the following will appear
    while (userOrder !=="house" && userOrder !=="hotel"){
        userOrder= prompt("please enter 'house' or 'hotel'");
    }
    // total number of the inputs 
    total = prompt ("how many would you want?")
    // processing
    for( i = 0 ; i < total ; i++){
        if (userOrder === "house"){
            orderImage = orderImage + '<img src="images/house.png">';
        } else if (userOrder === "hotel"){
            orderImage = orderImage + '<img src="images/hotel.png">';
        }
    }
    return orderImage;
};