$(document).ready(function(){
  initiateSections();
  // eventHandlers();
});

var sec = [];
var cross = [];
var num = [];

function initiateSections(){
  for(var i=0;i<9;i++){
    sec.push($('.sec:nth-child('+(i+1)+')'));
    cross.push($('.cross:nth-child('+(i+1)+')'));
  }

for(var i=0;i<9;i++){
  sec[i].click(function(){
    alert(i+1);
  });
}

  // sec[1].click(function(){
  //   alert('2');
  // });
}
