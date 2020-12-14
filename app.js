    var btsTranslate=document.querySelector("#bts-translate");
    var textArea=document.querySelector("#text-area");
    var outputText=document.querySelector("#output");

    outputText.innerText="aditya is here";


    function clickEventHandler(){
        console.log("clicked")
        console.log("hello",textArea.value)
    }

btsTranslate.addEventListener("click", clickEventHandler)
