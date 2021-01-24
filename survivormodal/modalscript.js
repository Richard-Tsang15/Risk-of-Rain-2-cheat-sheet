//acrid 
var acrid_modal = document.getElementById("acridmodal");
var acridonclick = document.getElementById("acridspace");
var acridspan = document.getElementsByClassName("acridclose")[0];

//artificer
var artificer_modal = document.getElementById("artificermodal");
var artificeronclick = document.getElementById("artificerspace");
var artificerspan = document.getElementsByClassName("artificerclose")[0];

//captain
var captain_modal = document.getElementById("captainmodal");
var captainonclick = document.getElementById("captainspace");
var captainspan = document.getElementsByClassName("captainclose")[0];


var commando_modal = document.getElementById("commandomodal");
var commandoonclick = document.getElementById("commandospace");
var commandospan = document.getElementsByClassName("commandoclose")[0];


var engineer_modal = document.getElementById("engineermodal");
var engineeronclick = document.getElementById("engineerspace");
var engineerspan = document.getElementsByClassName("engineerclose")[0];

var huntress_modal = document.getElementById("huntressmodal");
var huntressonclick = document.getElementById("huntressspace");
var huntressspan = document.getElementsByClassName("huntressclose")[0];

var loader_modal = document.getElementById("loadermodal");
var loaderonclick = document.getElementById("loaderspace");
var loaderspan = document.getElementsByClassName("loaderclose")[0];

var mercenary_modal = document.getElementById("mercenarymodal");
var mercenaryonclick = document.getElementById("mercenaryspace");
var mercenaryspan = document.getElementsByClassName("mercenaryclose")[0];

var mult_modal = document.getElementById("multmodal");
var multonclick = document.getElementById("multspace");
var multspan = document.getElementsByClassName("multclose")[0];

var rex_modal = document.getElementById("rexmodal");
var rexonclick = document.getElementById("rexspace");
var rexspan = document.getElementsByClassName("rexclose")[0];



acridonclick.onclick = function acridonclickevent() {
	acrid_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

acridspan.onclick = function() {
  acrid_modal.style.display = "none";
  document.body.classList.remove('overflowHidden');
}


artificeronclick.onclick = function artificerclickevent(){
	artificer_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

artificerspan.onclick = function(){
	artificer_modal.style.display = "none";
	document.body.classList.remove('overflowHidden');
}


captainonclick.onclick = function captainclickevent(){
	captain_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

captainspan.onclick = function(){
	captain_modal.style.display = "none";
	document.body.classList.remove('overflowHidden');
}


commandoonclick.onclick = function commandoclickevent(){
	commando_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

commandospan.onclick = function(){
	commando_modal.style.display = "none";
	document.body.classList.remove('overflowHidden');
}


engineeronclick.onclick = function engineeronclickevent() {
	engineer_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

engineerspan.onclick = function() {
  engineer_modal.style.display = "none";
  document.body.classList.remove('overflowHidden');
}


huntressonclick.onclick = function huntressonclickevent() {
	huntress_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

huntressspan.onclick = function() {
  huntress_modal.style.display = "none";
  document.body.classList.remove('overflowHidden');
}



loaderonclick.onclick = function loaderonclickevent() {
	loader_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

loaderspan.onclick = function() {
  loader_modal.style.display = "none";
  document.body.classList.remove('overflowHidden');
}



mercenaryonclick.onclick = function mercenaryonclickevent() {
	mercenary_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

mercenaryspan.onclick = function() {
  mercenary_modal.style.display = "none";
  document.body.classList.remove('overflowHidden');
}


multonclick.onclick = function multonclickevent() {
	mult_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

multspan.onclick = function() {
  mult_modal.style.display = "none";
  document.body.classList.remove('overflowHidden');
}


rexonclick.onclick = function rexonclickevent() {
	rex_modal.style.display = "block";
	document.body.classList.add('overflowHidden');
}

rexspan.onclick = function() {
  rex_modal.style.display = "none";
  document.body.classList.remove('overflowHidden');
}

 window.onclick = function(e){
            if(e.target.classList.contains('modal')){
                e.target.style.display = 'none';
				document.body.classList.remove('overflowHidden');
            }
        };




