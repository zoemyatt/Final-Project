var fname;
var holiday;

function sendSubmit(){
    fname = document.forms["myForm"]["fname"].value;
    holiday = document.forms["myForm"]["holiday"].value;

    if (fname == "") {
        alert("Name must be filled out");
        return false;
    } 
    else if (holiday == "") {
        alert("Holiday must be filled out");
        return false;
    }
    else{
        //document.forms["myForm"].reset();
        let item = document.getElementById("submit");
        item.textContent = fname + ", thanks for submitting!";
    }   
}