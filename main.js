$(function(){

    //stocker les analyse sur le texte
    var analyse = {
        "nombredemot": 0,
        "jamais": false,
        "toujours": false,
        "nbEmotionWords": 0,
        "nbNeedsWords": 0,
        "nbInsults": 0,
        "tu":0,
        "je":0,
    };

    //message à afficher à l'utilsiateur
    var messages = [];

    
    $("#buttonTry").click(function() {
        //récupérer contenu textArea
        var parsedText = $("#exampleFormControlTextarea1").val().split(" ");
        //var cleanedParsedText = cleanText(parsedText);
        // step1. count number of words
        analyse.nombredemot = parsedText.length;
        
        //step2. look for dangerous words
        //looking for "toujours"
        analyse.toujours = true;
        analyse.tu = true;
        var msgToujours = {
            "type": "error",
            "message": "Attention le mot toujours peut poser problème en CNV blablabli blablabla"
        };
        var msgTu = {
            "type": "error",
            "message": "Attention le mot tu peut poser problème en CNV blablabli blablabla"
        };
        messages.push(msgTu);
        messages.push(msgToujours);

        //get template and update page for analyse
        var tpl =$("#templateAnalyse").html();
        html2generate = Mustache.render(tpl, analyse);
        $("#inputAndResults").append(html2generate);

        //get template and update page for messages
        var tplErrorMsg =$("#messageErrorTpl").html();
        for(i=0;i<messages.length;i++){
            html2generate = Mustache.render(tplErrorMsg, messages[i]);
            $("#messages").append(html2generate);
        }
    });
});