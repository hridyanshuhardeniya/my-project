 // const playagain = confirm(" wanted to play?");

// first computer will say lets play stone paper and scissors
 do {
alert("lets play stone paper and scissors");
 let user = prompt("enter stone paper or scissor for stone enter 0, for scissor enter 1, for paper enter 2.");
user = Number.parseInt(user);
switch (user) {
  case 0: 
    alert("you choose stone");
    break;
  case 1:
    alert('you choose paper')
    break;
  case 2:
    alert("you choose scissor")
    break;
  default:
    ;
}

let computer = Math.floor(Math.random()*3);
switch (computer) {
  case 0:
    alert("computer chose stone");
    break;
  case 1: 
    alert("computer chose paper")
    break;
  case 2:
    alert("computer chose scissor")
    break;
    default:
    alert("computer chose stone");
}

 // user when chooses stone then this code will be executed
  if (user === 0 && computer === 1) {
  alert("computer wins")
}
else if ( user === 0 && computer === 2) {
   alert("user wins")
}
// user when chooses paper then this code will be executed
  
else if (user === 1 && computer === 0) {
   alert("user wins")
}
else if ( user === 1 && computer === 2) {
   alert( "computer wins")
}
// user when chooses scissor then this code will be executed
  
else if (user === 2 && computer === 0) {
   alert("computer wins")
}
else if ( user === 2 && computer === 1) {
   alert("user wins")
}
// when they have same choice then this code will be executed
else if (user === computer) {
   alert("its a tie")
}
// if user enters a wrong choice then this code will be executed
else {
   alert("please enter a valid choice")
} 

// Ask the user if they want to play again
var playagain = confirm("Do you want to play again?");
  }while(playagain)

if (!playagain) {
    alert("Goodbye!");
}