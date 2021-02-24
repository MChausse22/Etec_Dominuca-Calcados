//Fade Toggle
$(document).ready(function() {
    $("#Smasc").click(function(){
        $("#Smasc1").fadeToggle(1000)
    });
    $("#Sfem").click(function() {
        $("#Sfem1").fadeToggle(1000)
    });
    $("#Cmasc").click(function(){
        $("#Cmasc1").fadeToggle(1000)
    });
    $("#Cfem").click(function() {
        $("#Cfem1").fadeToggle(1000)
    });
});

//Hover imagens
$(document).ready(function() {
    $("img").mouseenter(function() {
        $(this).animate({
            opacity: '65%'            
        });
    });
    $("img").mouseleave(function() {
        $(this).animate({
            opacity: '100%'
            
        })
    })
});