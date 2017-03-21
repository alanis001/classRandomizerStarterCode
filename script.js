$(document).ready(function(){
    var ScriptEders = ["Lauren","Pamela","Lauren","Felix","Isabela","Gabrielle","Anahi"];
    var ScriptEducators = ["Jenna","Nick","Matthew","Michael"];
    var random2 = Math.floor(Math.random()*ScriptEducators.length);

    //console.log(ScriptEders[random]);
    console.log(ScriptEducators[random2]);


    $("#studentButton").click(function(){
            var random = Math.floor(Math.random()*ScriptEders.length);

    $("#studentDisplay").html(ScriptEders[random]);
    });
});