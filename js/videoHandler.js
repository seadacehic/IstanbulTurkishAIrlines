var vid = document.getElementById("istambulVideo"); 

function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
}

function videoPlayHandler() {
    const hash = window.location.hash ;
    const homePageRoute = '#home';
    if(hash !== homePageRoute) {
      pauseVid();
    } else {
      playVid();
    }
}