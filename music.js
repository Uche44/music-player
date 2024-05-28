// const musicPlayer = document.getElementById("music-player");
const musicImg = document.getElementById("music-img"),
  musicTitle = document.getElementById("music-name"),
  musicArtist = document.getElementById("artist"),
  playBtn = document.querySelector(".playBtn"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");
const music = document.getElementById("music");

let isPlaying = false;
// function to play song
function playMusic() {
  isPlaying = true;
  musicImg.classList.add("isPlaying");
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "pause");
  music.play();
}
function pauseMusic() {
  isPlaying = false;
  musicImg.classList.remove("isPlaying");
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "play");
  music.pause();
}

// now attach the play and pause function sto the buttons
playBtn.addEventListener("click", () =>
  isPlaying ? pauseMusic() : playMusic()
);
// creating an array with the available music
const songs = [
  {
    title: "Jacinto",
    artist: "Jacinto",
    src: "./music/jacinto.mp3",
    imageUrl: "./music/images/jacinto.jpg",
    id: 1,
  },
  {
    title: "Olisa",
    artist: "Jude Nnam",
    src: "./music/olisa.mp3",
    imageUrl: "./music/images/olisa.jpg",
    id: 2,
  },
  {
    title: "Unity",
    artist: "Alan Walker",
    src: "./music/unity.mp3",
    imageUrl: "./music/images/unity.jpg",
    id: 3,
  },
];

// current dsong
let songsIndex = 0;
// update dom
function loadMusic(songs) {
  musicTitle.textContent = songs.title;
  musicArtist.textContent = songs.artist;
  music.src = `music/${songs.title}.mp3`;
  musicImg.style.backgroundImage = `img/${songs.imageUrl}.jpg`;
}
// get song
loadMusic(songs[1]);
// events for buttons
prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
// define the prevMusic and nextMusic functions
function prevMusic() {
  songsIndex--;
  console.log(songsIndex);
}
function nextMusic() {
  songsIndex++;
  console.log(songsIndex);
}
// const audio = new Audio();

// let isPlaying = false,
//   songIndex = 1;

// function init() {
//   isPlaying = false;
//   songIndex = 1;
//   audio.src = songs[songIndex - 1].src;
//   // musicTitle = songs[songIndex + 1].title;
//   musicImg.style.background = `url("${songs[songIndex - 1].imageUrl}")`;
// }

// init();

// // function play_pause()
// playPauseBtn.onclick = () => {
//   if (!isPlaying) {
//     musicImg.classList.add("isPlaying");
//     audio.play();
//     playPauseBtn.classList.replace("fa-play", "fa-pause");
//     isPlaying = true;
//   } else if (isPlaying) {
//     musicImg.classList.remove("isPlaying");
//     audio.pause();
//     playPauseBtn.classList.replace("fa-pause", "fa-play");
//     isPlaying = false;
//   }
//   // console.log(audio.duration);
// };

// function next() {
//   songIndex += 1;
//   audio.src = songs[songIndex - 1].src;
//   musicImg.style.background = `url("${songs[songIndex - 1].imageUrl}")`;
//   musicTitle = songs[songIndex - 1].title;
//   audio.play();
// }

// function prev() {
//   songIndex -= 1;
//   audio.src = songs[songIndex - 1].src;
//   musicImg.style.background = `url("${songs[songIndex - 1].imageUrl}")`;
//   audio.play();
// }

// prevBtn.onclick = () => prev();
// nextBtn.onclick = () => next();
