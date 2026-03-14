// Basic implementation to play songs by updating the YouTube iframe
const songMap = {
    'The Weeknd Blinding Lights': '4NRXx6U8ABQ',
    'Drake Gods Plan': 'PP1xn5rO1GI', // Example video ID; replace with actual
    'Travis Scott Sicko Mode': '6ONRf7h3Mfk' // Example; replace with actual
};

function playSong(song) {
    const videoId = songMap[song];
    if (videoId) {
        document.getElementById('player').src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        alert('Song not found');
    }
}

function showSection(section){

var sections=document.getElementsByClassName("section");

for(var i=0;i<sections.length;i++){
sections[i].style.display="none";
}

document.getElementById(section).style.display="block";

}

function searchSong() {
    const query = document.getElementById('searchSong').value;
    // Implement search logic, e.g., embed search
    document.getElementById('player').src = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(query)}`;
}

function previousSong() {
    // Implement playlist logic
    alert('Previous song functionality not implemented');
}

function nextSong() {
    // Implement playlist logic
    alert('Next song functionality not implemented');
}

function saveFavorite() {
    // Implement save to favorites
    alert('Save favorite functionality not implemented');
}

function login() {
    // Implement login
    alert('Login functionality not implemented');
}

// Initialize by showing home
showSection('home');
