function checklength(infield,formfield,fieldlength){
    if(infield.value.length > 0 && infield.value.length < fieldlength){
        document.getElementById("fname error").innerHTML = "&#x274c";
    }
    else{
        document.getElementById("fname error").innerHTML =" &#x274c";
    }
}