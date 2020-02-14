


var mobBtn = document.getElementById("mob-btn");
var mobCont = document.getElementById("mob-menu-cont");
var mobOver = document.getElementById("mob-over");


console.log(mobBtn);

mobBtn.addEventListener("click", function(){
  mobCont.classList.toggle("mob-menu-active");
  mobOver.classList.toggle("mob-over-active");
  let mobBtn = undefined;


    });
