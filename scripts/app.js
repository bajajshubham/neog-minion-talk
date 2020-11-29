var input_textarea= document.querySelector("#textarea-input-lang");
var output_div = document.querySelector("#div-output-banana");
var btn_translate = document.querySelector("#btn-translate");

var querySource = "	https://api.funtranslations.com/translate/minion.json"

btn_translate.addEventListener("click",translate)



function minionErrorHandler(error)
{
    output_div.innerText = ""+error;
    alert("Error While Translating ");
    input_textarea.value=" ";
}

function giveQueryURL(text)
{
    var encodeURL = encodeURI(text);
    // console.log("encode: ",encodeURL);
    // console.log(querySource+"?text="+encodeURL);
    return `${querySource}?text=${encodeURL}`;
}


function translate(event)
{
    console.log("\n button translate clicked \n");
    output_div.innerText = " ";
        var text = input_textarea.value;
        var queryURL = giveQueryURL(text);
    // console.log("text",text,"queryURL",queryURL);
    fetch(queryURL)
    .then(response => response.json() )
    .then(json => { output_div.innerText=""+json.contents.translated ; })
    .catch(minionErrorHandler)
        // output_div.innerText = "Error While Translating";)
}

// input_textarea.addEventListener("click",function clear() {
//     input_textarea.value = " ";
// });

