//Todo: Add songs and required functionality in songStore module

const songStore = {
  songs: [],
}

let newSong = {title: "Smells Like Teen Spirit", artist: "Nirvana"};
songStore.addSong(newSong);
songStore.getAllSongs();