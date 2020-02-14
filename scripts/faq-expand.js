var x = document.getElementById("faqCol").querySelectorAll(".faq-expand-sect");
var y = document.getElementById("faqCol").querySelectorAll(".hidden-answer");
console.log(x);
console.log(y);

console.log(x.length);



for (var i = 0; i < x.length; i++) {
  let counter = i
  x[i].addEventListener("click", function(){
    console.log(x[counter].childNodes[2]);
    // x[counter].classList.add("active-color");
    x[counter].childNodes[1].classList.toggle("faq-expand-active");
    y[counter].classList.toggle("faq-expand-active-content");

    // x[counter].childNodes[3].classList.add("active-header");
    // x[counter].childNodes[5].classList.add("active");
    // x[counter].childNodes[7].classList.add("active-show");
    // console.log("hi" + x[counter].childNodes[7]);
    //x[counter].childNodes[4].classList.add("active");

  })
  x[i].addEventListener("mouseleave", function(){
    console.log(x[counter].childNodes[1]);
    // x[counter].classList.remove("active-color");
    // x[counter].childNodes[1].classList.remove("active");
    // x[counter].childNodes[3].classList.remove("active-header");
    // x[counter].childNodes[5].classList.remove("active");
    // x[counter].childNodes[7].classList.remove("active-show");
  })
  ;
}
