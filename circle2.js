function whenButtonClick (){

  var myRadius = document.getElementById("radiusValue").value;
  // document.body.appendChild(radiusElement);

//var radius = document.getElementById("radius").value;
var areaCircle= myRadius*myRadius*Math.PI;
console.log(areaCircle);

var areaTotaled = document.createElement("div");
areaTotaled.className= "areaTotaled";
areaTotaled.innerText="Area is " + (myRadius*myRadius*Math.PI).toFixed(2);


// var myArea = document.createElement("div");
// area.innerText="Area is " + (myRadius*myRadius*Math.PI).toFixed(3);
// myArea.appendChild(area);

var circle=document.createElement("div");
circle.style.width=(myRadius*2) + "px";
circle.style.height=(myRadius*2) + "px";
circle.className= "circle";
//this does not work, why?
//document.body.style.backgroundImage  ="url('Chevronpurple.png')";
//circle.backgroundColor ="red";
//circle.borderRadius = "50%";

document.body.appendChild(areaTotaled);
document.body.appendChild(circle);
document.getElementById("click");













};
