// function imgSwap(id) {
//   document.getElementById("ps4c").src = id;
// }

// var setTwo = document.getElementById("ps4c");

// // A = cross B = circle Y = triangle X = square

// // setTwo.addEventListener("dblclick", function () {
// //   document.getElementById("circle").src = "images/b.jpg";
// //   document.getElementById("cross").src = "images/a.jpg";
// //   document.getElementById("triangle").src = "images/y.jpg";
// //   document.getElementById("square").src = "images/x.jpg";
// // });

// var toggle = 0;

// document.getElementById("buttons").addEventListener("dblclick", function(){
//   if(toggle == 0)
//   {
// document.getElementById("circle").src = "images/b.jpg";
// toggle = 1;
//   }
//   else{
//     document.getElementById("circle").src = "images/circle.jpg";
//     toggle = 0;
//   }
// })
// var psB = [
//   "circle.png",
//   "cross.png",
//   "square.png",
//   "triangle.png",
// ];
var psB = ["ps4c.png", "circle.png", "cross.png", "square.png", "triangle.png"];
var xBox = ["xBox.png", "b.jpg", "a.jpg", "y.jpg", "x.jpg"];
var path = "images/";
var toggle = 0;

function createList() {
  document.getElementById("ps4c").src = path +  psB[0]
  for (i = 1; i < psB.length; i++) {
    var psButtons = document.createElement("img");
    var psButtonsSrc = document.createElement("src");
    psButtons.src = path + psB[i];
    psButtons.className = "Buttons";  

    psButtons.addEventListener("click", clickMe);
    document.getElementById("buttons").appendChild(psButtons);
  }

  //   document.getElementsByTagName("li").addEventListener("click", )
}

window.addEventListener("load", initializePage);

function initializePage() {
  createList();
}

document.getElementById("ps4c").addEventListener("dblclick", function () {
  if (toggle == 0) {
    changeImages(psB);
    toggle = 1;
  } else {
    changeImages(xBox);
    toggle = 0;
  }
});
function changeImages(anArray) {
  var imgArray = document.getElementsByTagName("img");
  console.log(typeof imgArray);
  for (i = 0; i < imgArray.length; i++) {
    imgArray[i].src = path + anArray[i];
    // document.getElementById("ps4c").src = path + anArray[0];
    // document.getElementById("psB1").src = path + anArray[1];
    // document.getElementById("psB2").src = path + anArray[2];
    // document.getElementById("psB3").src = path + anArray[3];
    // document.getElementById("psB4").src = path + anArray[4];
  }
}
function clickMe(e) {
  console.log(e.target.innerHTML);
}
