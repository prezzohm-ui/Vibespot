function showSection(section){

var sections=document.getElementsByClassName("section");

for(var i=0;i<sections.length;i++){
sections[i].style.display="none";
}

document.getElementById(section).style.display="block";

}

/* MUSIC PLAYER */

var playlist=[];
var current=-1;

function searchSong(){

var song=document.getElementById("searchSong").value;

document.getElementById("player").src=
"https://www.youtube.com/embed?listType=search&list="+song;

playlist.push(song);
current=playlist.length-1;

}

function playSong(song){

document.getElementById("player").src=
"https://www.youtube.com/embed?listType=search&list="+song;

playlist.push(song);
current=playlist.length-1;

}

function nextSong(){

if(current<playlist.length-1){

current++;

document.getElementById("player").src=
"https://www.youtube.com/embed?listType=search&list="+playlist[current];

}

}

function previousSong(){

if(current>0){

current--;

document.getElementById("player").src=
"https://www.youtube.com/embed?listType=search&list="+playlist[current];

}

}

/* FAVORITES */

function saveFavorite(){

var song=playlist[current];

var favorites=JSON.parse(localStorage.getItem("favorites")) || [];

favorites.push(song);

localStorage.setItem("favorites",JSON.stringify(favorites));

displayFavorites();

}

function displayFavorites(){

var favorites=JSON.parse(localStorage.getItem("favorites")) || [];

var list=document.getElementById("favoriteList");

list.innerHTML="";

favorites.forEach(function(song){

var li=document.createElement("li");

li.innerText=song;

list.appendChild(li);

});

}

displayFavorites();

/* LOGIN */

function login(){

var user=document.getElementById("username").value;

localStorage.setItem("user",user);

document.getElementById("loginMsg").innerText="Welcome "+user;

}
