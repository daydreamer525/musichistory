var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns and Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log('the songs length is '+songs.length);

songs.unshift("Down with the Sickness > Disturbed on the album Sickness");

songs[songs.length] = "End Song Name";

// songs[i] = songs
    // .replace("*","")
    // .replace("@","")
    // .replace("(","")
    // .replace("!","")


// songs[1]= "REMOVE LOGICAL SONG"
// console.log("song at the 1 place")
// console.log(songs[1]);
// console.log("Additional Song = "+ songs[6]);

// 1. JAMES CODE
var destination = document.getElementById('injectionSpot')
var masterString = "";

var songElement
for (var i = 0; i < songs.length; i++) {
    var song = songs[i];
    songs[i] = song
    .replace(">", "-")
    .replace("*","")
    .replace("@","")
    .replace("(","")
    .replace("!","")

    console.log(song)
    // 2. JAMES CODE
    songElement = "<li >
                    <span id='songname1' class='song-name'>"
                     + songs[i] + "</span></li>"
    masterString = masterString + songElement
}
console.log("final:")
console.log( songs ); 

// 3. JAMES CODE 
destination.innerHTML = masterString;
console.log(masterString)


"<li ><span id='songname1' class='song-name'>Legs - by Z*Ztop on the album Eliminator</span>"





//  for (var i = 0; i <= 4; i++) {
//  if (songs === songs [i]) {
// ￼} 
//  else
// }


