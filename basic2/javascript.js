$(document).ready (function(){
    $("#claus").on('click', function(e){
        $(".result").text("you clicked on a santa claus");
    });
    $("#box").on('click', function(e){
        $(".result").text("you clicked on a box");
    });
    $("#bell").on('click', function(e){
        $(".result").text("you clicked on a bell");
    });
});
