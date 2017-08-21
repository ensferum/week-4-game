
$( document ).ready(function(){

    //Sets a global variable that sets a number that should be between 19 and 120

	var targetNumber = Math.floor(Math.random()*101+19);
		

	$("#randomNumber").text(targetNumber);


	// Create a variable that stores a randomly generated number between 1-12 for sharks
	//on click event that that links to the total score

	var num1= Math.floor(Math.random()*11+1);
  	var num2= Math.floor(Math.random()*11+1);
  	var num3= Math.floor(Math.random()*11+1);
  	var num4= Math.floor(Math.random()*11+1);

// Create a counter for the # of Wins
// Create a counter for the # of Losses

	var userTotal = 0;
	var wins = 0;
	var losses = 0;


$("#numberWins").text(wins);
$("#numberLosses").text(losses);



 function reset(){
      targetNumber=Math.floor(Math.random()*101+19);
      console.log(targetNumber)
      $("#randomNumber").text(targetNumber);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $("#finalTotal").text(userTotal);
      } 



//adds the wins to the userTotal
function winner(){
alert("You won!");
  wins++; 
  $("#numberWins").text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
alert ("You lose!");
  losses++;
  $("#numberLosses").text(losses);
  reset();
}





//  win/lose conditions
  $("#gallery1").on("click", function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
        if (userTotal == targetNumber){
          winner();
        }
        else if (userTotal > targetNumber){
          loser();
        }   
  });  
  $("#gallery2").on("click", function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
        if (userTotal == targetNumber){
          winner();
        }
        else if (userTotal > targetNumber){
          loser();
        } 
  }); 
  $("#gallery3").on("click", function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
          if (userTotal == targetNumber){
          winner();
        }
        else if (userTotal > targetNumber){
          loser();
        } 
  });  
  $("#gallery4").on("click", function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
          if (userTotal == targetNumber){
          winner();
        }
        else if (userTotal > targetNumber){
          loser();
        }
  });   
}); 

