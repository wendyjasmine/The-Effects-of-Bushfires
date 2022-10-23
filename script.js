// play fire audio and load intro page
function loadContent1() {
    document.getElementById("track_1").play();
    document.getElementById("introduction").style.display = "inline";
    document.getElementById("openingScene").style.opacity = "0%";
    document.body.style.overflow= "auto";
}

// allows the viewer to mute and play the audio
function mute() {
    var myAudio = document.getElementById("track_1");
    myAudio.muted= true;
    document.getElementById("mute").style.display = "none";
    document.getElementById("unMute").style.display = "inline";
}

function unMute() {
    var myAudio = document.getElementById("track_1");
    myAudio.muted = false;
    document.getElementById("unMute").style.display = "none"
    document.getElementById("mute").style.display = "inline"
}

// make the audio volume decrease as you scroll past it
window.onscroll = () => {
    pos = window.scrollY;
    console.log('Pos:' + pos)
    music = document.getElementById("track_1");
    if (pos < 749) {
         music.volume = 1 - (pos / 850)
    }
    if (pos > 749) {
        music.volume = 0.3
    }
}
// chanegs the picture on the first box depending on the scroll position of the text
function divScroll() {
    var position = document.getElementById('left1').scrollTop;
    console.log('Div: ' + position)

    imgList = ["flora1", "flora2", "flora3", "flora4", "flora5"]
    for (let i = 0; i < imgList.length; i++) {
        imgList[i] = document.getElementById(imgList[i])
    }

    if (position < 175) {
        flora1.style.opacity = 1;
        flora2.style.opacity = 0;
    }

    if (position > 175 && position < 325) {
        flora1.style.opacity = 0;
        flora2.style.opacity = 1;
        flora3.style.opacity = 0;
    }

    if (position > 324 && position < 600) {
        flora2.style.opacity = 0;
        flora3.style.opacity = 1;
        flora4.style.opacity = 0;
    }
    if (position > 599 && position < 750){
        flora3.style.opacity = 0;
        flora4.style.opacity = 1;
        flora5.style.opacity = 0;
    }
    if (position > 900){
        flora4.style.opacity = 0;
        flora5.style.opacity = 1;

    }
}
// displays the appropriate page on the second panel according to the buttons 
function loadContent2() {
    document.getElementById("endangermentPage").style.display = "inline";
    document.getElementById("deathPage").style.display = "none";
    document.getElementById("ecosystemPage").style.display = "none";
    document.getElementById("glaciersPage").style.display = "none";
    
}
function loadContent3() {
    document.getElementById("endangermentPage").style.display = "none";
    document.getElementById("deathPage").style.display = "inline";
    document.getElementById("ecosystemPage").style.display = "none";
    document.getElementById("glaciersPage").style.display = "none";
    
}
function loadContent4() {
    document.getElementById("endangermentPage").style.display = "none";
    document.getElementById("deathPage").style.display = "none";
    document.getElementById("ecosystemPage").style.display = "inline";
    document.getElementById("glaciersPage").style.display = "none";
    
}
function loadContent5() {
    document.getElementById("endangermentPage").style.display = "none";
    document.getElementById("deathPage").style.display = "none";
    document.getElementById("ecosystemPage").style.display = "none";
    document.getElementById("glaciersPage").style.display = "inline";
    
}

    