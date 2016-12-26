var sec = [];
var cross = [];
var players = 0;
var player1 = "";
var player2 = "";
var computer = "";
var turn = "p1"; // should be randomized later.
var tokensUsed = 0;
var sections = { 1: "off", 2: "off", 3: "off", 4: "off", 5: "off", 6: "off", 7: "off", 8: "off", 9: "off" };
$(document).ready(function(){
  askPlayer();
  initiateVars();
  loadDocElements();
});

function askPlayer(){
  $('.gameScreen>*').toggle();
  $('.askPlayer').toggle();
  $('.askPlayer').html("<div class='message'>How do you want to play?</div><div class=options><div>One Player</div><div>Two Player</div></div");
  $('.askPlayer>.options>div:nth-child(1)').click(function(){ players = 1; askXO(); });
  $('.askPlayer>.options>div:nth-child(2)').click(function(){ players = 2; askXO(); });
}

function loadDocElements(){
  var left = 0;
  var top  = 0;
  for(var i=0;i<=8;i++){
    top = parseInt(i/3) * 33.3333;
    sec[i].css('left',left+'%');
    sec[i].css('top',( top+'%'));
    left += 33.3333;
    if(left>99) left=0;

  }
}

function initiateVars(){
  for(var i=0;i<9;i++){
    sec.push($('.sec:nth-child('+(i+1)+')'));
    cross.push($('.cross:nth-child('+(i+1)+')'));
  }
}

function eventHandlers(){
  // $('.cross').click(function(){
  //     var index = $(this).index();
  //     cross[index].css('display','none');
  // });
  $('.sec').click(function(){
    if(turn == "p1"){
      var index = $(this).index();
      var left = sec[index].css('left');
      var top = sec[index].css('top');
      cross[index].css('display','block');
      cross[index].css('left',left);
      cross[index].css('top',top);
      cross[index].css('z-index','99');
      cross[index].html(player1);
      turn = "com";
      tokensUsed++;
      computerTurn();
      sections[index+1] = "on";
    }
  });
}

function askXO(){
  $(".message").html("Would you like to be X or O?");
  $(".options>div:nth-child(1)").html("X");
  $(".options>div:nth-child(2)").html("O");
  $(".options").css("font-size","3em");
  $(".message").css("margin","10vh 10vh 2vh 10vh");
  $('.askPlayer>.options>div:nth-child(1)').click(function(){ player1 = "X"; computer = "O";  game(); });
  $('.askPlayer>.options>div:nth-child(2)').click(function(){ player1 = "O";  computer = "X"; game(); });
}

function game(){
    $('.gameScreen>*').toggle();
    eventHandlers();
}

function computerTurn(){ var index;
  myVar = setTimeout(function(){
    if( tokensUsed == 9 ){ return; }
    index = computeIndex();
    while( sections[index+1] != "off"  ){
      index = computeIndex();
    }
    showToken(index, computer);
  }, 1000);
}

function showToken(index, token){
  var left = sec[index].css('left');
  var top = sec[index].css('top');
  cross[index].css('display','block');
  cross[index].css('left',left);
  cross[index].css('top',top);
  cross[index].css('z-index','99');
  cross[index].html(token);
  sections[index+1] = "on";
  if (turn == "com") turn = "p1";
  tokensUsed++;
}

function computeIndex(){ var flag,i,adjacents=0,remainingSlot=0;
  if(tokensUsed < 3 )
    return Math.floor(Math.random() * 9);
  else{

    for(i=1;i<=3;i++){
      if( sections[i+1] == player1 )
        adjacents++;
      else
        remainingSlot = i;
    }
    console.log(adjacents);
    if(adjacents == 2)
      console.log("Remaining Slot: "+remainingSlot);
    return Math.floor(Math.random() * 9);
  }
}
