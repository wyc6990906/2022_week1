const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function (library) {
  const playlists = library.playlists
  // console.log(playlists)
  for (const key in playlists) {
    console.log(`${playlists[key].id}: ${playlists[key].name} - ${playlists[key].tracks.length}`)
  }
}

// printPlaylists(library)

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function (library) {
  const tracks = library.tracks
  // console.log(tracks)
  for (const key in tracks) {
    console.log(`${tracks[key].id}: ${tracks[key].name} by ${tracks[key].artist}(${tracks[key].album})`)
  }

}
// printTracks(library)

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  let tracksNum = library.playlists[playlistId]["tracks"];
  console.log(
    playlistId + ": "
    + library.playlists[playlistId]["name"] + " - "
    + tracksNum.length + " tracks"
  );

  tracksNum.forEach((trackNumber) => {
    console.log(
      trackNumber + ": " + library.tracks[trackNumber]["name"]
      + " by " + library.tracks[trackNumber]["artist"]
      + " (" + library.tracks[trackNumber]["album"] + ")"
    );
  });
}
// printPlaylist("p01")

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId)
  console.log(library.playlists[playlistId].tracks)
}
// addTrackToPlaylist("t02", "p02");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function (name, artist, album) {
  const uid = generateUid();
  library.tracks["t0" + ((Object.keys(library.tracks).length) + 1)] = {
    id: uid,
    name: name,
    artist: artist,
    album: album
  }

  console.log(library.tracks)

}
addTrack("Quiet", "Jay Chou", "Final Cut");
printTracks(library);

// adds a playlist to the library
const addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}
