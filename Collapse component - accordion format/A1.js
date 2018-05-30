
$(document).ready(function(){
// condition setting for hoverning of a.prettyboy
$(`a.prettyboy`).hover(function(){
  // condition stting when cursor is inside the a.prettyboy
    $(this).css("color", "blue"); // text color becomes blue
    $(this).parents("div.container1").addClass("sigma"); //sigma class is added to div.container1
    }, 
    // when cursor gets out 
    function(){
    $(this).css("color", "black"); // text color becomes black
    $(this).parents("div.container1").removeClass("sigma"); // sigma class is removed from div.container1
    }).
    // condition setting for clicking of a.prettyboy
    click(function () { 
    // div.Container2_1 slides down
    $('.sigma').children("div.Container2_1").slideToggle("fast");
    
});
 });