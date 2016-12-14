$(document).ready(function(){
  // loadDocElements();
  initiateVars();
  // eventHandlers();
});

var sec = [];
var cross = [];

function loadDocElements(){
  var left = 33.3333 ;
  for(var i=2;i<=9;i++){
    $('.cross:nth-child('+i+')').css({'background-color': 'green','left': left+'%','top': '33.33%'});
    left += left;
    if(left>100) left = 33.3333;
  }
}

function initiateVars(){
  for(var i=0;i<9;i++){
    sec.push($('.sec:nth-child('+(i+1)+')'));
    cross.push($('.cross:nth-child('+(i+1)+')'));
  }
  $('.cross').click(function(){
    var index = $(this).index();
    cross[index].css('display','none');
  });
  $('.sec').click(function(){
    var index = $(this).index();
    console.log(index);
    cross[index].css('display','block');
  });

// for(var i=0;i<9;i++){
//   sec[i].click(function(){
//     cross[i].toggle();
//   });
// }

  // sec[1].click(function(){
  //   alert('2');
  // });
}
