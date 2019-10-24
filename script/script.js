 let modal = document.getElementById("my_modal");
 let modal3 = document.getElementById("my_modal3");
 let btn = document.getElementById("btn_modal_window");
 let btn2 = document.getElementById("btn2_modal_window");
 let span = document.getElementsByClassName("close_modal_window")[0];
 let span2 = document.getElementsByClassName("close_modal_window3")[0];
 let modalc1 = document.getElementsByClassName("modal_content")[0];
 let modalc2 = document.getElementsByClassName("modal2_content")[0];
 let header = document.getElementsByClassName("header")[0];

 btn.onclick = function() {
     modal.style.display = "block";
     modalc2.style.display = "none";
 }

 btn2.onclick = function() {
     modal3.style.display = "block";
     span2.style.display = "block";
     header.style.zIndex = "2";
 }

 span.onclick = function() {
     modal.style.display = "none";
 }

 span2.onclick = function() {
     modal3.style.display = "none";
     header.style.zIndex = "3";
 }


 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
     if (event.target == modal3) {
         modal3.style.display = "none";
         header.style.zIndex = "3";
     }
 }

 modalc1.onclick = function() {
     modalc2.style.display = "block";
 }