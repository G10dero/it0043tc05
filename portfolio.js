document.addEventListener('DOMContentLoaded', function() {
    
    let playBtns = document.querySelectorAll('.play-btn');
    let audios = [
        document.getElementById('song1'),
        document.getElementById('song2'),
        document.getElementById('song3')
    ];

    playBtns.forEach(function(playBtn, index) {
        playBtn.addEventListener('click', function() {
            let audio = audios[index];
            let songContainer = playBtn.closest('.song'); 

            
            audios.forEach(function(aud, i) {
                if (i !== index && !aud.paused) {
                    aud.pause();
                    aud.currentTime = 0; 
                    
                    let otherPlayBtn = playBtns[i];
                    otherPlayBtn.src = './pimg/play.png';
                    let otherSongContainer = otherPlayBtn.closest('.song');
                    otherSongContainer.style.backgroundColor = 'rgb(34, 205, 137)'; 
                    otherSongContainer.style.color = "black"; 
                }
            });

            
            if (audio.paused) {
                audio.play();
                playBtn.src = './pimg/pause.png'; 
                songContainer.style.backgroundColor = "black"; 
                songContainer.style.color = "white"; 
            } else {
                audio.pause();
                playBtn.src = './pimg/play.png'; 
                songContainer.style.backgroundColor = 'rgb(34, 205, 137)';
                songContainer.style.color = "black"; 
            }
        });

        
        audios[index].addEventListener('ended', function() {
            playBtns[index].src = './pimg/play.png'; 
            let songContainer = playBtns[index].closest('.song');
            songContainer.style.backgroundColor = 'rgb(34, 205, 137)';
            songContainer.style.color = "black"; 
        });
    });
});
