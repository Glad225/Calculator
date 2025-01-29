const display = document.getElementById("display");

function showinput(input) {
    display.value += input;
}

function clearallinput() {
    display.value = "";
    
}

function clearsingleinput() {
    display.value =display.value.slice(0,-1);
}
function result(){
    display.value= eval(display.value)
}
































