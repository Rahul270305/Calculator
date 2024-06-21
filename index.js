const A = document.getElementById("display");
function operator(B){
    A.value += B;
}
function clearD(){
    A.value = "";
}
function calculate(){
    try{
        A.value = eval(A.value);
    }
    catch(error){
        A.value = "syntax error";
    }
}
function Delete() {
    let currentValue = A.value;
    A.value = currentValue.slice(0, -1); 
}
function on() {
    A.value = "turned on";
    setTimeout(function(){
        A.value = ""; 
    }, 500);
    
}
function off() {
    A.value = "turned off";
    setTimeout(function(){
        A.value = ""; 
    }, 500);
    
}