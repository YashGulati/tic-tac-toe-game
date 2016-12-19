var sec = [];
var cross = [];
var players = 0;

$(document).ready(function(){
  askPlayer();
  initiateVars();
  loadDocElements();
  eventHandlers();
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
  $('.cross').click(function(){
    var index = $(this).index();
    cross[index].css('display','none');
  });
  $('.sec').click(function(){
    var index = $(this).index();
    var left = sec[index].css('left');
    var top = sec[index].css('top');
    cross[index].css('display','block');
    cross[index].css('left',left);
    cross[index].css('top',top);
    cross[index].css('z-index','99');
  });
}

function askXO(){
  $(".message").html("Would you like to be X or O?");
  $(".options>div:nth-child(1)").html("X");
  $(".options>div:nth-child(2)").html("O");
  $(".options").css("font-size","3em");
  $(".message").css("margin","10vh 10vh 2vh 10vh");
  $('.askPlayer>.options>div:nth-child(1)').click(function(){
    alert("1 player");
  });
  $('.askPlayer>.options>div:nth-child(2)').click(function(){
    alert("2 player");
  });
}
