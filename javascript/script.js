let pen = document.querySelector(".bi-pen")
let body = document.querySelector("body");
let bio = document.querySelectorAll(".bio")
let links = document.querySelectorAll("a");
let showcase = document.querySelectorAll("#showcase_name");
let fields = document.querySelectorAll("form-floating");

document.querySelector("#moon").addEventListener("click", function(){
  for (i = 0; i < showcase.length; i++){
    showcase[i].style.color = "#fff";
  }

  for (i = 0; i < bio.length; i++){
    bio[i].style.color = "#fff"
  }

  body.style.backgroundColor = "#444"; 
  body.style.color = "#000"; 
  pen.style.color = "#fff";

});

document.querySelector("#sun").addEventListener("click", function(){
  body.style.backgroundColor = "#fff"; 
  body.style.color = "#000";
  pen.style.color = "#000";

  for (i = 0; i < showcase.length; i++){
    showcase[i].style.color = "#000";
  }

  for (i = 0; i < bio.length; i++){
    bio[i].style.color = "#000"
  }

  // for (i = 0; i < links.length; i++){
  //   links[i].style.color = "#777";
  //   }
});