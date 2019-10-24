let modal4 = document.getElementById("my_modal4");
let btn4 = document.getElementById("btn4_modal_window");
let span4 = document.getElementsByClassName("close_modal_window4")[0];
let header2 = document.getElementsByClassName("header")[0];

btn4.onclick = function() {
    modal4.style.display = "block";
    span4.style.display = "block";
    header2.style.zIndex = "1";
}

span4.onclick = function() {
    modal4.style.display = "none";
    header2.style.zIndex = "3";
}


window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
        header2.style.zIndex = "3";
    }
}