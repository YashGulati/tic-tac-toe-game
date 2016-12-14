$(document).ready(function(){
  initiateVars();
  loadDocElements();
  // eventHandlers();
});

var sec = [];
var cross = [];

function loadDocElements(){
  var left = 0;
  var top  = 0;
  for(var i=0;i<=8;i++){
    sec[i].css('left',(left+'%'));
    sec[i].css('top',( top+'%'));
    left += 33.3333;
    top +
    if(left>100) left=100/3;
  }
}

function initiateVars(){
  for(var i=0;i<9;i++){
    sec.push($('.sec:nth-child('+(i+1)+')'));
    cross.push($('.cross:nth-child('+(i+1)+')'));
  }
  $('.cross').click(function(){
    var index = $(this).index();
    console.log(index);
    cross[index].css('display','none');
  });
  $('.sec').click(function(){
    var index = $(this).index();
    console.log(index);
    cross[index].css('display','block');
    var left = sec[index].css('left');
    console.log(left);
    cross[index].css('left',left);
  });

}
