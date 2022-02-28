function processText (form){
    var string = form.inputbox.value;
    string = string.match(/[0-9][0-9][0-9]{1}|[A-Z][A-Z][A-Z]{1}|[A-Z][A-Z][0-9]{1}|[A-Z][0-9][A-Z]{1}|[0-9][A-Z][A-Z]{1}|[0-9][0-9][A-Z]{1}|[A-Z][0-9][0-9]{1}|[0-9][A-Z][0-9]{1}/g);
    document.getElementById("output").innerHTML = string;
}



    