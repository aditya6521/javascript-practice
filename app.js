    var btsTranslate=document.querySelector("#bts-translate");
    var textArea=document.querySelector("#text-area");
    var outputText=document.querySelector("#output");


    // yoda mock api by tanay sir
    // var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

    //minion api
    var serverUrl="https://api.funtranslations.com/translate/minion.json";


    function getTranslationUrl(text){
        return serverUrl + "?" + "text=" + text
    }

    function errorHandler(error){
        console.log("error occured",error)
    }

    function clickEventHandler(){
       //outputText.innerText="abba jabba "+textArea.value;
       var inputText=textArea.value;

       fetch(getTranslationUrl(inputText))
       .then(response => response.json())
       .then(json => {
        var translatedText=json.contents.translated;
        outputText.innerText= translatedText;
    })
       //.error(errorHandler)
    
     }

btsTranslate.addEventListener("click", clickEventHandler)
