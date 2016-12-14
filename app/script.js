$(document).ready(function(){
  initiateSections();
  // eventHandlers();
});

var sec = [];
var cross = [];

function initiateSections(){
  for(var i=0;i<9;i++){
    sec.push($('.sec:nth-child('+(i+1)+')'));
    cross.push($('.cross:nth-child('+(i+1)+')'));
    sec[i].click(function(){
      cross[i].css('display','block');
      this.css('background-color','#000000');
    });
  }
  cross[0].click(function(){
    cross[0].css('display','none');
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
