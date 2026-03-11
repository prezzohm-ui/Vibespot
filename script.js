function welcomeMessage(){

alert("Welcome to VibeSpot created by Prezzoh Musila!");

}


function showSection(section){

document.getElementById("home").style.display="none";
document.getElementById("music").style.display="none";
document.getElementById("movies").style.display="none";
document.getElementById("gaming").style.display="none";
document.getElementById("about").style.display="none";

document.getElementById(section).style.display="block";

}


/* Image slider */

var images = [
"images/weeknd.jpeg",
"images/darkknight.jpeg",
"images/mw2.jpeg"
];

var index = 0;

function changeImage(){

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("sliderImage").src = images[index];

}

setInterval(changeImage,3000);