$(document).ready(function(){
  initiateVars();
  loadDocElements();
  // eventHandlers();
});

var sec = [];
var cross = [];

function loadDocElements(){
  var left = 100/3 ;
  for(var i=1;i<=8;i++){
    sec[i].css('left',(i*left+'%'));
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
