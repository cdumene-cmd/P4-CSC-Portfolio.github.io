$(document).ready(function () {

  var audio = document.getElementById("player");

  $('#play').click(function () {
    $('#message').text("Playing track");
    audio.play();
  });

  $("#pause").click(function () {
    audio.pause();
    $("#message").text("Track paused");
  });

  $("#mute").click(function () {
    audio.muted = true;
    $("#message").text("Track muted");
  });

  $("#unmute").click(function () {
    audio.muted = false;
    $("#message").text("Track unmuted");
  });

  $("#stop").click(function () {
    audio.pause();
    audio.currentTime = 0;
    $("#message").text("Track stopped");
  });

  $("#volUp").click(function () {
    audio.volume = Math.min(1, audio.volume + 0.1);
    $("#message").text("Volume: " + Math.round(audio.volume * 100) + "%");
  });

  $("#volDown").click(function () {
    audio.volume = Math.max(0, audio.volume - 0.1);
    $("#message").text("Volume: " + Math.round(audio.volume * 100) + "%");
  });

});
