const songStore = {
  songs: [],
}

let newSong = {title: "Smells Like Teen Spirit", artist: "Nirvana"};
songStore.addSong(newSong);
let songs = songStore.getAllSongs();
