$(document).ready(function () {

  var audio = document.getElementById("player");

  $("#play").click(function () {
    $("#message").text("Playing track");
    audio.play();
  });

  $("#pause").click(function () {
    audio.pause();
    $("#message").text("Paused");
  });

  $("#stop").click(function () {
    audio.pause();
    audio.currentTime = 0;
    $("#message").text("Stopped");
  });

  $("#mute").click(function () {
    audio.muted = true;
    $("#message").text("Muted");
  });

  $("#unmute").click(function () {
    audio.muted = false;
    $("#message").text("Unmuted");
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
