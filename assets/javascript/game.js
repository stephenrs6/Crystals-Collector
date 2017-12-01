//Declare variables
var wins = 0;
var losses = 0;
var current = 0;

$("#playerWins").text(wins);
$("#playerLosses").text(losses);

// Upon doc ready, show a randomized goal variable that the user must match (19-120)
$(document).ready(function () {
    var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#goal").text(goal);
});


function randNum() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}
// Now for the hard part. Creating multiple crystals each with their own unique number value.
function resetGame() {
    var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#goal").text(goal);
    // We begin by expanding our array to include four options.
    var crystalValue = ["#btn1", "#btn2", "#btn3", "#btn4"];
    for (var i = 0; i < crystalValue.length; i++) {
        var crystalId = crystalValue[i];
        $(crystalId).attr("data-crystalvalue", randNum());
        crystalValue = parseInt(crystalValue);

        console.log(crystalValue);
    }

}

$(".crystal-img").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var increment = ($(this).attr("data-crystalvalue"));
    increment = parseInt(increment);
    console.log(increment);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    current += increment;
    current = parseInt(current)
    $("#current").text(current);
    console.log(current);

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + current);
});
if (current === goal) {
    alert("You win!");
    wins++;
    resetGame();

}

else if (current >= goal) {
    alert("You lose!!");
    losses++;
    resetGame();

}




