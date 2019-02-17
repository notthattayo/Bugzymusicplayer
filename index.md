<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BUGZY MUSIC PLAYER</title>
    <link rel="stylesheet" href="css/shepeteri.css">
   
</head>
<body>
<div class ="wrap">
<h1>BUGZY MUSIC PLAYER</h1>
<div class= "controller">
<img id= "prevB" class ="prevButton" src="images/prev.png" alt="">
<!--<img id="rewindB" class = "rewindButton" src="images/rewind.png" alt="">-->
<img id= "playB" class =   "playButton"  src="images/play.png" alt="">
<!---<img id="forwardB" class= "forwardButton" src="images/forward.png" alt="">--->
<img id= "nextB" class=   "nextButton" src="images/next.png" alt="">
</div>
<div class="volume-slider">
     <img id="vol" src="images/volume.png" alt="">
     <input id="volumeslider" type="range" min="0" max="1" value="1" step="0.10" onchange="setvolume()">
    </div>

<div  class="song-slider">
     <input id="songslider" type="range" min="0" max="100" step="0.01" onchange="func()">
    </div>
    <div id="current-Time" class="currentTime">00:00</div>
    <div id="duration" class="duration">00:00</div>
<div 
><p><span>Bugzy Malone! Watch This!</span></p>

    </div>
    <div>
        <img id= "art" src="" alt=" " width=200px height="200px">
    </div>
    </div>
    <script src="js/shepeteri.js"></script>
</body>
</html>
