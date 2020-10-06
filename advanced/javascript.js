 $( ".draggable" ).draggable({
        connectToSortable: "#list2",
 } );
var pos1;
var pos2;
var pos3;
var check1 = 1;
var check2 = 1;
var check3 = 1;
 $(".draggable").on('mouseup', function(){
       pos1 = $("#drag1").position();  
       pos2 = $("#drag2").position(); 
       pos3 = $("#drag3").position(); 

 if(pos1.left > 0 && pos1.left < 200 && pos1.top > 500 && pos1.top <700)
 {
       $("#box1").css("background-color", "yellow");
       check1 = 0;
       checkWin();
 }
if(check1 == 1){
       $( "#drag1" ).draggable({
              connectToSortable: "#list2",
              revert: true
       } );
}
else{
       $( "#drag1" ).draggable({
              connectToSortable: "#list2",
              revert: false
       } );
}
 if(pos2.left > 300 && pos2.left < 500 && pos2.top > 500 && pos2.top <700)
 {
       $("#box2").css("background-color", "blue");
       check2 = 0;
       checkWin();
 }
 if(check2 == 1){
       $( "#drag2" ).draggable({
              connectToSortable: "#list2",
              revert: true
       } );
}
else{
       $( "#drag2" ).draggable({
              connectToSortable: "#list2",
              revert: false
       } );
}

 if(pos3.left > 600 && pos3.left < 800 && pos3.top > 500 && pos3.top <700)
 {
       $("#box3").css("background-color", "pink");
       check3 = 0;
       checkWin();
 }
 if(check3 == 1){
       $( "#drag3" ).draggable({
              connectToSortable: "#list2",
              revert: true
       } );
}
else{
       $( "#drag3" ).draggable({
              connectToSortable: "#list2",
              revert: false
       } );
}
 });

function checkWin(){
 if(check1 == 0 && check2 == 0 && check3 == 0)
 {
        alert("you have won!");
        location.reload();
 }}