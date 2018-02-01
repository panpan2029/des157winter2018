// global variables
var joke = document.getElementById('joke');
var answer = document.getElementById('answer');
var close = document.getElementById('close');

// add click to joke with anonymous function to show answer
joke.addEventListener('click', function() {
  answer.style.display = "block";
  // challenge: add a fade up?
})

// add a click to close overlay
close.addEventListener('click', function() {
  answer.style.display = "none";
})

// challenge: add a cursor hover
// note: the css looks like this:
// cursor: pointer;