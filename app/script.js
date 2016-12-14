$(document).ready(function(){
  initiateVars();
  loadDocElements();
  eventHandlers();
});

var sec = [];
var cross = [];

function loadDocElements(){
  var left = 0;
  var top  = 0;
  for(var i=0;i<=8;i++){
    console.log(top);
    sec[i].css('left',left+'%');
    sec[i].css('top',( top+'%'));
    left += 33.3333;
    top = parseInt(i/3) * 33.3333;
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
