(function(window) {
  var byeSpeaker = {};
    byeSpeaker.speak = function() {
        console.log(speakWord + " " + names);
    }
    var speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
    }(window));