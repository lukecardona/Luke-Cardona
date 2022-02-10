AOS.init();

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});



/*Audio Section */
const text = document.getElementById("myText");
const speech = new Audio("Me.mp3");
const myButton = document.getElementById("myButton");
speech.pause();
var isPlaying = false;
var delay = 47;

const letters = document.querySelectorAll(".aboutMeText")
const rubberband = document.querySelectorAll(".rubberband")
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

/*Adding Span to each Letter*/
rubberband.forEach(rubberband => {
    rubberband.innerHTML = rubberband.innerText
        .split("")
        .map((letter, idx) => `<span class="nameAnimation in-line" data-aos="fade-down"
        data-aos-delay="${idx * 50}" data-aos-duration="800">${letter}</span>`)
        .join("")
})

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

window.addEventListener("scroll", scrollEventHandler, false);
//Pulse
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
        status.innerText = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.classList.add("error")
        status.innerText = "Oops! There was a problem"
    });
}
form.addEventListener("submit", handleSubmit)