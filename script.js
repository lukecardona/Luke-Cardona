$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
const text = document.getElementById("myText");
var speech = new Audio("Me.mp3")
var isPlaying = false;
var delay = 47;
speech.pause();

const letters = document.querySelectorAll(".aboutMeText")
const rubberband = document.querySelectorAll(".rubberband")
atStart();

function atStart() {
    letters.forEach(letters => {
        letters.innerHTML = letters.innerText
            .split("")
            .map((letter, idx) => `<span style="transition-delay:${idx * delay}ms">${letter}</span>`)
            .join("")
    })
}

rubberband.forEach(rubberband => {
    rubberband.innerHTML = rubberband.innerText
        .split("")
        .map((letter) => `<span class="nameAnimation in-line">${letter}</span>`)
        .join("")
})

function textEffect() {
    const text = document.getElementById("myText");
    text.classList.add("textanimation");
}

function playMusic() {
    if (isPlaying) {
        speech.pause();
        speech.currentTime = 0;
        delay = 47;
        atStart();
        text.classList.remove("textanimation")
    } else {
        speech.play();
        textEffect();
        delay = 0;
    }
    isPlaying = !isPlaying;
}

speech.addEventListener("ended", function () {
    playMusic();
})

var scroll = document.getElementById("scroll")
var scrollRemoved = false;
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        scroll.classList.remove("arrow");
        scroll.classList.remove("pulse");
        scrollRemoved = true;
    } else {
        if (scrollRemoved) {
            scroll.classList.add("arrow");
            scroll.classList.add("pulse");
        }
    }
});
//Form Submit
var form = document.getElementById("contact-me");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add("success");
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.classList.add("error")
        status.innerHTML = "Oops! There was a problem"
    });
}
form.addEventListener("submit", handleSubmit)