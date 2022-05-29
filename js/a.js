$(document).ready(function () {

    $("#COP3502Body").hide();
    $("#COP3503Body").hide();
    $("#COP3530Body").hide();
    $("#CEN3031Body").hide();
    $("#CDA3101Body").hide();
    $("#EEL3701Body").hide();

    $("#COP3502").click(function(){
        $("#COP3502Body").toggle();
    });

    $("#COP3503").click(function(){
        $("#COP3503Body").toggle();
    });


    $("#COP3530").click(function(){
        $("#COP3530Body").toggle();
    });
    
    $("#CEN3031").click(function(){
        $("#CEN3031Body").toggle();
    });

    $("#CDA3101").click(function(){
        $("#CDA3101Body").toggle();
    });

    $("#EEL3701").click(function(){
        $("#EEL3701Body").toggle();
    });
});