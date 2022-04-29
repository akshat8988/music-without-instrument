var i = 0;
var txt = 'Art heals...';

window.onload=function type() {
  if (i < txt.length) { 
    document.getElementById("art").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, 100);
  }

}

const button1FullScreen=document.querySelector('.btn1');
const video1=document.querySelector('#c1');

button1FullScreen.addEventListener('click', ()=>{
    video1.requestFullscreen();
})

const button2FullScreen=document.querySelector('.btn2');
const video2=document.querySelector('#c2');

button2FullScreen.addEventListener('click', ()=>{
    video2.requestFullscreen();
})



var ppbutton = document.getElementById("play1");
ppbutton.addEventListener("click", playPause);
myVideo = document.getElementById("c1");
function playPause() { 
    if (myVideo.paused) {
       
        ppbutton.className = "Pause";
        myVideo.play();
        }
    else  {
        
        ppbutton.className = "Play";
        myVideo.pause(); 
        }
}

var pbutton = document.getElementById("play2");
pbutton.addEventListener("click", playPause1);
myVide = document.getElementById("c2");
function playPause1() {
    if (myVide.paused) {
       
        pbutton.className = "Pause";
        myVide.play();
        }
    else  {
        
        pbutton.className = "Play";
        myVide.pause(); 
        }
}


