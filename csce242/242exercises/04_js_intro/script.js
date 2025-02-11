
//do stuff when button clicks
document.getElementById("btn-click-me").onclick = ()=>{
    console.log("WOW!");
    document.getElementById("result");
};

//when button is pressed, in the console it prints "Hello World" then the message below changes from Hello to Goodbye
document.getElementById("btn-color").onclick = ()=>{
    console.log("Hello World");
    document.getElementById("message").innerHTML = "Goodbye"; //changes "message" into "goodbye"
}

//change color
document.getElementById("btn-color").onclick = ()=> {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Good bye";
    messageP.classList.toggle("sad");
}

//notes!!!!!
//when you take out the () it does it on click
// () means now
//any clode insidet the function of the curly braces will be executed
//"const" is how you use contant
//always use const, everything is a const, unless it is truly changing
//the only time you need a let, is you have a counter or a for loop
//if terminal says its wrong than use let, but always use const bc it is standard. 