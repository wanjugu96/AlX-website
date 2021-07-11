document.addEventListener("DOMContentLoaded", function(event){

   // alert('Hello!');
document.getElementById("smart_thumbnail");
console.log("i saw you click!");

var thumbnailElement = document.getElementById("smart_thumbnail");

document.getElementById("smart_thumbnail").addEventListener("click", function() {
      if (thumbnailElement.className == "small") {
     thumbnailElement.className = "";
    } else {
       thumbnailElement.className = "small";
    }
  });


});