    var btsTranslate=document.querySelector("#bts-translate");
    var textArea=document.querySelector("#text-area");
    var outputText=document.querySelector("#output");


    var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

    function getTranslationUrl(text){
        return serverUrl + "?" + "text=" + text
    }

    function errorHandler(error){
        console.log("error occured",error)
    }

    var updatestatus;

    function clickEventHandler(){
       //outputText.innerText="abba jabba "+textArea.value;
       var inputText=textArea.value;
       fetch(getTranslationUrl(inputText))
       .then(response>=response.json())
       .then(json >= console.log(json))
       .error(errorHandler)
     }

btsTranslate.addEventListener("click", clickEventHandler)
