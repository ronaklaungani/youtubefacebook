const capture = document.getElementById('timerCanvas');
const value = capture.getAttribute('value');
console.log(value);

if (value > 0) {

var c = document.getElementById("timerCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";
ctx.beginPath();
ctx.arc(22, 22, 12, 0, 2 * Math.PI);
ctx.fill();


ctx.fillStyle = "#ffffff";
var angle = Math.PI * 0.02 * value;
ctx.translate(22, 22);
ctx.rotate(-90 * Math.PI / 180);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.arc(0, 0, 10, 0 * Math.PI, angle);
ctx.lineTo(0, 0);
ctx.fill();


}


function displayMenu() { 
			document.getElementById("left-part").style.display = 'block';
			}

function hideMenu() { 
			document.getElementById("left-part").style.display = 'none';
			}

function slideInSearchBar() {
			document.getElementById("slide-in-search-bar").style.display = 'grid';
			document.getElementById("search-suggestions").style.display = 'block';
}


function slideOutSearchBar() {
			document.getElementById("slide-in-search-bar").style.display = 'none';
			document.getElementById("search-suggestions").style.display = 'none';
}



var w = window.innerWidth;

console.log("width " + w);

if (w < 425) {

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-bar").style.top = "0px";
  } else {
    document.getElementById("top-bar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

}


