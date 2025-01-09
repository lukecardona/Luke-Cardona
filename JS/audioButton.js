/*Audio Section */
const text = document.getElementById("myText");
const speech = new Audio("Me.mp3");
const myButton = document.getElementById("myButton");
speech.pause();
var isPlaying = false;
var delay = 47;

const letters = document.querySelectorAll(".aboutMeText")

atStart();
/*Adding Text to speech animation*/
function atStart() {
    letters.forEach(letters => {
        letters.innerHTML = letters.innerText
            .split("")
            .map((letter, idx) => `<span style="transition-delay:${idx * delay}ms">${letter}</span>`)
            .join("")
    })
}

/*Adding Animation Class */
function textEffect() {
    const text = document.getElementById("myText");
    text.classList.add("textanimation");
}

/*Button Music*/
function playMusic() {
    if (isPlaying) {
        /*If stopped Mid Way */
        speech.pause();
        speech.currentTime = 0;
        delay = 47;
        atStart();
        text.classList.remove("textanimation")
        myButton.innerText = "PLAY!"
        isPlaying = false;
    } else {
        /*If Stopped Mid Way */
        speech.play();
        textEffect();
        delay = 0;
        myButton.innerText = "STOP!"
        isPlaying = true;
    }

    /*At end of Message */
    setTimeout(function () {
        speech.pause();
        speech.currentTime = 0;
        delay = 47;
        atStart();
        text.classList.remove("textanimation")
        myButton.innerText = "PLAY!"
        isPlaying = false;
    }, 32000);
}
