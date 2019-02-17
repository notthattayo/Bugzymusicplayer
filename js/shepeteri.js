
    var songs = ["Moving.mp3","Memory Lane (Ft. Tom Grennan).mp3","B. Inspired.mp3","Immortal.mp3"];
    var images=["bugzy2.jpg","coverk.jpg","bugzy1.jpg","stereo.jpg"];
    var songslider = document.getElementById("songslider") ;
    var volumeslider = document.getElementById("volumeslider");
    var currentTime = document.getElementById("current-Time");
    var duration = document.getElementById("duration") 
    var songName = document.getElementsByTagName("span");
    var song = new Audio();
    var currentsong = 0;
    var currentart=0;
    var playpausesong = document.getElementById("playB");
    var prevsong = document.getElementById("prevB")
    var nextsong = document.getElementById("nextB")
    var art = document.getElementById("art");
    var timeholder=0;
    var seeking;
    var seekto;
  

    song.src ="songs/" + songs[currentsong];
   
    
   
    playpausesong.addEventListener("click", playpause);
   
     function playpause(){
               console.log("clicked");
               
               if(song.paused){
                    song.play();
                    playpausesong.setAttribute("src" , "images/pause.png");
                    art.setAttribute("src","images/"+images[currentart]);
                    art.style.display = "block";
                    art.style.margin= "0 20px"
               }
               else if(!song.paused){
                    song.pause();
                    playpausesong.setAttribute("src" , "images/play.png");
               }
               songName[0].innerHTML = "Now playing" + " - " + songs[currentsong];
               art.setAttribute("src","images/"+images[currentart]);
              
     }


     volumeslider.addEventListener("mousemove", setvolume);
     
     function setvolume(){
               console.log("setting volume");
               console.log(event)
               song.volume = volumeslider.value;
     }
    
    prevsong.addEventListener("click", previous);

    function previous(){
            console.log("user clicked previous");
            currentsong--;
            currentart--;
            if (currentsong<0){
                 currentsong=0;
                 currentart=0;
                 song.src ="songs/" + songs[currentsong];
                 song.play()
                 songName[0].innerHTML = "Now playing" + " - " + songs[currentsong];
                 art.setAttribute("src","images/"+images[currentart])
          }
          else{
              song.src ="songs/" + songs[currentsong];
              song.play()
              songName[0].innerHTML = "Now playing" + " - " + songs[currentsong];
              art.setAttribute("src","images/"+images[currentart])
     }

    }

     nextsong.addEventListener("click", next);

     function next(){
             console.log("user clicked next");
             currentsong++;
             currentart++;
             if (currentsong>songs.length-1){
               song.src ="songs/" + songs[0]
               currentsong=0;
               currentart=0;
               songName[0].innerHTML = "Now playing" + " - " + songs[currentsong];
               playpause();
               
             }

               
           else {
               song.src ="songs/" + songs[currentsong];
               playpause();
               songName[0].innerHTML = "Now playing" + " - " + songs[currentsong];
               art.setAttribute("src","images/"+images[currentart])
          }
           } 
      

      
      setInterval(updateslider,1000);

          function updateslider(){
               timeholder = Math.round(song.currentTime);
               songslider.value = timeholder;
               var lastTime= timeconverter(timeholder);
               currentTime.textContent = lastTime;
               if(song.ended){
                    console.log("song finished");
                    next(); 
               }

               dura();
               art.setAttribute("src","images/"+images[currentart]);
          }
          
          function timeconverter(secs){
                var min = Math.floor(secs/60);
                var sec = secs%60;
                min = (min<10) ? "0" + min:min;
                sec = (sec<10) ? "0" + sec:sec;
                return (min + ":" + sec)
                

               }
          
           
               setTimeout(dura,1000);
           

          function dura(){
               var lastduration = Math.floor(song.duration);
               songslider.setAttribute("max", lastduration);
               duration.textContent= timeconverter(lastduration);
          }
          
     
          songslider.addEventListener("click", func);
          
         function func() {
               console.log("clicked");
               song.currentTime=songslider.value;
          };
         
          
