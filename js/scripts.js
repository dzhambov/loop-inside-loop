$(document).ready(function()  {
  $("#cardDeck").submit(function()  {
    event.preventDefault();

    var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    var suits = ["clubs", "hearts", "diamonds", "spades"];

    suits.forEach(function(suit)  {   
      numbers.forEach(function(number)  {

      var card =(number + " of " + suit);
      $("#card").append("<li>" + card + "</li>");
      
      });
    });
  });
});