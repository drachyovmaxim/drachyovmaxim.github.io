'use strict';

import '../css/main.scss';

document.addEventListener("DOMContentLoaded", function() {
  var player = document.getElementById("live-player");
  var play = document.getElementById("play");
  var pause = document.getElementById("pause");
  var url = "http://dramax.out.airtime.pro:8000/dramax_a";
  var pause = document.getElementById("pause");

  play.addEventListener("click", function(evt) {
    player.src = url;
    player.play();
  });

  pause.addEventListener("click", function(evt) {
    player.pause();
  });

  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      callback(status, xhr.response);
    };
    xhr.send();
  };

  getJSON('https://dramax.airtime.pro/api/live-info-v2', function(err, data) {
    var liveEpisodeName = data.tracks.current.name;
    checkLive(liveEpisodeName);
  });

  setInterval( function() {
    getJSON('https://dramax.airtime.pro/api/live-info-v2', function(err, data) {
      var liveEpisodeName = data.tracks.current.name;
      checkLive(liveEpisodeName);
      console.log(liveEpisodeName)
    });
  }, 10000)

});

function checkLive(liveEpisodeName) {
  var container = document.getElementById("audio-container");
  var name = document.getElementById("name");
  if (liveEpisodeName=="SPK - Wars of Islam" || liveEpisodeName=="Peder Mannerfelt - Nihilist 87" || liveEpisodeName=="Autechre - 9010171-121") {
    container.classList.add("red")
  } else {
    container.classList.remove("red")
  }
  name.innerHTML = liveEpisodeName;
}