function getpar1(){
    var inputs=[];
    for(var j=1;j<=6;j++){
        inputs.push(document.getElementById("text"+j).value);
    }
    inputs.join(". ");
    document.getElementById("showpara1").innerHTML= inputs.join(". ");
}
function getpar2(){
    var inputs2=[];
    for(var j=7;j<=12;j++){
        inputs2.push(document.getElementById("text"+j).value);
    }
    inputs2.join(". ");
    document.getElementById("showpara2").innerHTML= inputs2.join(". ");
}