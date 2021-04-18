var userClickedPattern = [];

var gamePattern = [];


var buttonColours = ["red", "blue", "green", "yellow"];

playSound(userChosenColour);

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + "randomChosenColour").fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}


$(".btn").click(function() {
  var userChosenColour = $(this).attr("id")

  userClickedPattern.push(userChosenColour)
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
