var container= document.querySelector("#container");
var heartIcon= document.querySelector("i");
container.addEventListener("dblclick", ()=>{
heartIcon.style.transform="translate(-50%,-50%) scale(1)";
heartIcon.style.color=" rgb(228, 9, 199)";
heartIcon.style.opacity=0.9

setTimeout(function(){
  heartIcon.style.opacity=0;

},2000);

setTimeout(function(){
  heartIcon.style.transform="translate(-50%,-50%) scale(0)";

},2000);

})
