//Declare variables
var wins = 0;
var losses = 0;
var current = 0;
var goal = 0;



// Upon doc ready, show a randomized goal variable that the user must match (19-120)
$(document).ready(function () {
    resetGame();
});


function randNum() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}
// Now for the hard part. Creating multiple crystals each with their own unique number value.
function resetGame() {
    goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    current = 0;

    // We begin by expanding our array to include four options.
    var crystalValue = ["#btn1", "#btn2", "#btn3", "#btn4"];
    for (var i = 0; i < crystalValue.length; i++) {
        var crystalId = crystalValue[i];
        console.log(crystalId);
        $(crystalId).attr("data-crystalvalue", randNum());
        console.log($(crystalId).attr("data-crystalvalue"));
    }
    $("#goal").text(goal);
    $("#playerWins").text(wins);
    $("#playerLosses").text(losses);
    $("#current").text(current);

}

$(".crystal-img").on("click", function () {
    console.log();

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var increment = ($(this).attr("data-crystalvalue"));
    console.log($(this));
    increment = parseInt(increment);
    console.log(increment);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    current += increment;
    current = parseInt(current);
    $("#current").text(current);
    console.log(current);

    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (current === goal) {
        wins++;
        resetGame();

    }

    else if (current > goal) {
        losses++;
        resetGame();

    }

});