var sec = [];
var cross = [];
var player = 0;

$(document).ready(function(){
  askPlayer();
  initiateVars();
  loadDocElements();
  eventHandlers();
});

function askPlayer(){
  $('.gameScreen>*').toggle();
  $('.askPlayer').html("<div class='message'>How do you want to play?</div><div class=options><div>One Player</div><div>Two Player</div></div");
  $('.askPlayer').toggle();
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
