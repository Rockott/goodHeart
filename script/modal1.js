let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];
let modalc1 = document.getElementsByClassName("modal_content")[0];
let modalc2 = document.getElementsByClassName("modal2_content")[0];

btn.onclick = function() {
    modal.style.display = "block";
    modalc2.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modalc1.onclick = function() {
    modalc2.style.display = "block";
}