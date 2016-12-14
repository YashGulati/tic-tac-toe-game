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
  
}

function loadDocElements(){
  var left = 0;
  var top  = 0;
  for(var i=0;i<=8;i++){
    top = parseInt(i/3) * 33.3333;
    sec[i].css('left',left+'%');
    sec[i].css('top',( top+'%'));
    left += 33.3333;
    console.log(top);
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
    console.log(index);
    cross[index].css('display','none');
  });
  $('.sec').click(function(){
    var index = $(this).index();
    var left = sec[index].css('left');
    var top = sec[index].css('top');
    console.log(index);
    cross[index].css('display','block');
    cross[index].css('left',left);
    cross[index].css('top',top);
    cross[index].css('z-index','99');
  });
}
