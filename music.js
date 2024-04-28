const genreFilter = document.getElementById("genres");
const songListEle = document.querySelector(".song-list");
const image = document.getElementById("image");
const title = document.getElementById("title");
const owner = document.getElementById("owner");
const audio = document.querySelector("audio");
const songPlayerSource = document.getElementById("song-player-source");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.querySelector("body");
const createPlaylistForm = document.getElementById("create-playlist");
const submitBtn = document.querySelector(".submit-button");
const addToPlaylistBtn = document.querySelector(".add-to-playlist");
const allPlaylistEle = document.querySelector(".all-playlist");
const currentPlaylistEle = document.querySelector(".current-playlist");

const genreAray = ["Remember Me"];

const songsData = [
  {
    id: 1,
    title: "Raabta",
    owner: "",
    name: "Raabta (Agent Vinod)-(PagalWorld.Ink).mp3",
    songType: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQ7wGlQoLehjzTxd2J_emKt9G6XNCA56opA&s",
  },
  {
    id: 2,
    title: "Chukar mere man ko",
    owner: "",
    name: "Chookar Mere Man Ko - (Raag.Fm).mp3",
    songType: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbKP5WZPjYUlbd1_nVXCVR7alecEscLvIFA&s",
  },  
  {
    id: 3,
    title: "Tuje kese pta na chala",
    owner: "",
    name: "Tujhe Kaise, Pata Na Chala(KoshalWorld.Com).mp3",
    songType: "",
    image:
      "data:image/jpeg;base64,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",
  },

  {
    id: 4,
    title: "Tera Yaar Hoon Main",
    owner: "",
    name: "Tera-Yaar-Hoon-Main(PaglaSongs).mp3",
    songType: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYE6O_dnfJvQstY8ttJDY7LOSzqQboDXlmg&s",
  },
  {
    id: 5,
    title: "Tera Hawale",
    owner: "",
    name: "Tere-Hawaale(PaglaSongs).mp3",
    songType: "",
    image:
      "https://th.bing.com/th/id/OIP.IVjVHhwymZVWyIB7VfxXcQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const playListArr = [];

let currentPlaylist = 0;

let currentSelectedSong = songsData[0].id;
let counter = 0;

function createOption(value) {
  const option = document.createElement("option");
  option.textContent = value;
  genreFilter.appendChild(option);
}

function addOption() {
  genreFilter.textContent = "";
  genreAray.forEach((genre) => {
    createOption(genre);
  });
  genreFilter.value = genreAray[0];
  showSongs();
}

// display all songs
function showSongs() {
  songListEle.textContent = "";
  const filterValue = genreFilter.value;
  const filteredArr =
    filterValue != "All"
      ? songsData.filter((song) => song.songType == filterValue)
      : [...songsData];
  if (filteredArr.length) {
    filteredArr.forEach((song) => {
      addSong(song);
    });
  }
}

function addSong(song, element) {
  const div = document.createElement("div");
  div.textContent = `${song.title} - ${song.owner}`;
  div.classList.add("song-name");
  songListEle.appendChild(div);
  div.addEventListener("click", () => {
    currentSelectedSong = song.id;
    renderCurrentSong();
  });
}

function searchSongById(id) {
  return songsData.find((song) => song.id == id);
}

// Render current song card
function renderCurrentSong() {
  if (currentSelectedSong) {
    const songObj = searchSongById(currentSelectedSong);
    image.src = `${songObj.image}`;
    title.textContent = songObj.title;
    owner.textContent = songObj.owner;

    // create source for audio
    songPlayerSource.src = `${songObj.name}`;
    songPlayerSource.type = "audio/mp3";
    audio.currentTime = 0;
    audio.load();
    audio.play();
  }
}

// Go to previous song
function playPrevious() {
  if (counter - 1 < 0) {
    previous.disabled = true;
    return;
  }
  counter--;
  next.disabled = false;
  currentSelectedSong = songsData[counter].id;
  renderCurrentSong();
}

// Go to next song
function playNext() {
  if (counter + 1 >= songsData.length) {
    next.disabled = true;
    return;
  }
  counter++;
  previous.disabled = false;
  currentSelectedSong = songsData[counter].id;
  renderCurrentSong();
}

function renderPlaylistSong(playlistId) {
  currentPlaylist = playlistId;

  const playlistIndex = findPlaylist();
  if (playlistIndex !== -1) {
    currentPlaylistEle.textContent = "";
    playListArr[playlistIndex].songs.forEach((songObj) => {
      addPlaylistEle(songObj);
    });
  }
}
// Create playlist
function createPlaylist() {
  let playlistInput = document.getElementById("playlist-name");
  if (playlistInput.value) {
    const playlistId = playListArr.length + 1;
    playListArr.push({
      id: playlistId,
      name: playlistInput.value,
      songs: [],
    });

    const div = document.createElement("div");
    div.textContent = playlistInput.value;
    div.classList.add("playlist-name");
    allPlaylistEle.appendChild(div);

    div.addEventListener("click", () => {
      renderPlaylistSong(playlistId);
    });
    createPlaylistForm.reset();
    if (currentPlaylist === 0) {
      currentPlaylist = playlistId;
    }
  }
}


previous.addEventListener("click", (event) => {
  event.preventDefault();
  playPrevious();
});

next.addEventListener("click", (event) => {
  event.preventDefault();
  playNext();
});

createPlaylistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createPlaylist();
});

addToPlaylistBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addToPlaylist();
});

addOption();
renderCurrentSong();
audio.pause();
