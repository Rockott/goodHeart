let modal3 = document.getElementById("my_modal3");
let btn2 = document.getElementById("btn2_modal_window");
let span2 = document.getElementsByClassName("close_modal_window3")[0];

btn2.onclick = function() {
    modal3.style.display = "block";
    span2.style.display = "block";
}

span2.onclick = function() {
    modal3.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}