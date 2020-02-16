var x = document.getElementById("services").querySelectorAll(".service-item");
console.log(x);

console.log(x.length);



for (var i = 0; i < x.length; i++) {
  let counter = i
  x[i].addEventListener("mouseover", function(){
    console.log(x[counter].childNodes[1]);
    x[counter].classList.add("active-card");
    // x[counter].childNodes[1].classList.add("active");
    // x[counter].childNodes[3].classList.add("active-header");
    // x[counter].childNodes[5].classList.add("active");
    // x[counter].childNodes[7].classList.add("active-show");
    // console.log("hi" + x[counter].childNodes[7]);
    //x[counter].childNodes[4].classList.add("active");

  })
  x[i].addEventListener("mouseleave", function(){
x[counter].classList.remove("active-card");
  })
  ;
}




// var mobBtn = document.getElementById("mob-btn");
// var mobCont = document.getElementById("mob-menu-cont");
// var mobOver = document.getElementById("mob-over");
//
//
// console.log(mobBtn);
//
// mobBtn.addEventListener("click", function(){
//   mobCont.classList.toggle("mob-menu-active");
//   mobOver.classList.toggle("mob-over-active");
//   let mobBtn = undefined;
//
//
//     });
