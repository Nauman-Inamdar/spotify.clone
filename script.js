console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems')); 


let songs = [
{songName: "Retro - wave", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
{songName: "lady of the 80s", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
{songName: "universe - our", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
{songName: "lofi - chill", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
{songName: "vibe - type", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
{songName: "dard  Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
{songName: " karib-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
{songName: "jabb -e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
{songName: "aapke-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
{songName: "sabke-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},

]; 

songItems.forEach((element, i)=>{
    element.getElementsByTagname("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1; 
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0; 

        }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seek
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target );
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})