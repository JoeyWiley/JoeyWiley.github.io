var solved = false;
var correctNumber = 0;
var numGuesses = 0;
var numGuessesWord = "0 guesses";
window.onload = function() {
  loadNumber();
  document.getElementById("textInput").focus();
}

function loadNumber() {
  correctNumber = Math.floor(Math.random() * 999);
}

function check() {
  if (document.getElementById("textInput").value != "") {
    numGuesses++
    if (numGuesses == 1) {
      numGuessesWord = numGuesses + " guess"
    } else {
      numGuessesWord = numGuesses + " guesses"
    }
    var guess = document.getElementById("textInput").value;
    document.getElementById("textInput").value = "";
    console.log("Guess > " + guess)
    if (guess == correctNumber) {
      document.getElementById("outputText").innerHTML = "You correctly guessed my number, <b>" + correctNumber + "</b>, <br>in " + numGuessesWord + "!";
      solved = true;
    } else if (guess > correctNumber) {
      document.getElementById("outputText").innerHTML = "Your guess of <b>" + guess + "</b> is <b>greater than</b> than my number! <br>" + numGuessesWord;
      document.getElementById('textInput').style.animation="shake 0.3s linear";
      setTimeout(() => { document.getElementById('textInput').style.animation=""; }, 300);
    } else if (guess < correctNumber) {
      document.getElementById("outputText").innerHTML = "Your guess of <b>" + guess + "</b> is <b>less than</b> than my number! <br>" + numGuessesWord;
      document.getElementById('textInput').style.animation="shake 0.3s linear";
      setTimeout(() => { document.getElementById('textInput').style.animation=""; }, 300);
    }
  }
}


function validate(evt) { // Validate input is a number
  var theEvent = evt || window.event;
  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function keyDown(evt) {
  if (evt.keyCode == 13) {
    if (solved == true) {
      loadNumber();
      numGuesses = 0;
      solved = false;
    }
    check()
    document.getElementById('submitInput').classList.add("keyDown");
  }
}
function keyUp(evt) {
  if (evt.keyCode == 13) {
    document.getElementById('submitInput').classList.remove("keyDown");
  }
}
