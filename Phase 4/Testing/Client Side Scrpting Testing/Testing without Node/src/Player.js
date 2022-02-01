// ES5 style object creation 
function Player() {
}
// adding dynamic behaviour to Player object. 
// 1 behaviour ie play and 2 propety ie currentPlaing song and isPlaying 
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};
// 2nd behaviour pause change value from true of false. 
Player.prototype.pause = function() {
  this.isPlaying = false;
};
// 3rd behavour resume if isPlaying true throw Exception or Error 
Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};
