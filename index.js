//                           {DETECTING BUTTON PRESS}

//.length counts of the buttons that have a class of ".drum" a places the number value in a variable called "numberOfDrumButtons".

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//This loop will continue to run until the value stored in 'i' is greater than the value found in "numberOfDrumButtons".

for (var i = 0; i < numberOfDrumButtons; i++) {

//while looping through the given "numberOfDrumButtons" this gives the elements with a class of ".drum" a listening property designed to detect a user's click.

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//"this." gives the identity of the button that was pressed by the user/trigger the event." ".innerHTML is the HTML of the button that got pressed."

    var buttonInnerHTML = this.innerHTML;

//Passed the HTML into the function "makeSound"

    makeSound(buttonInnerHTML);

//Animates the button based on the HTML passed in by the user input

    buttonAnimation(buttonInnerHTML);

  });

}


//                        {DETECTING KEYBOARD PRESS}

//Ensures that key strokes from the user trigger a given event

document.addEventListener("keypress", function(event) {

//Passed the key property of the event to the function "makeSound"

  makeSound(event.key);


//Animates the button once the user presses a key

  buttonAnimation(event.key);

});

// Switch statement was created to cycle through buttons and match the corresponsding input with the matching sound.
// The following code in each case inside the switch statement is responsible for playing the assigned sound:
// EX: var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();

//a function that takes 1 parameter "key"

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

// default case covers all of possible inputs

    default: console.log(key);

  }
}

//function designed animate the current button being pressed so the user knows they have pressed the right button.
//takes 1 parameter "current key"

function buttonAnimation(currentKey) {

//currentKey gets passed a regular character, ". +" is use to concatenate the "." and the given character
//to convert the user input into the proper format to find the right button

  var activeButton = document.querySelector("." + currentKey);

//changes the pressed buttons style

  activeButton.classList.add("pressed");

//Resets the styles of the button back to its orignal look

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
