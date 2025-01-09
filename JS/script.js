AOS.init();

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

const rubberband = document.querySelectorAll(".rubberband")

/*Adding Span to each Letter*/
rubberband.forEach(rubberband => {
    rubberband.innerHTML = rubberband.innerText
        .split("")
        .map((letter, idx) => `<span class="nameAnimation in-line" data-aos="fade-down"
        data-aos-delay="${idx * 50}" data-aos-duration="800">${letter}</span>`)
        .join("")
    // rubberband.addEventListener('mouseover', () => {
    //     console.log("Element is being hovered");
    // });
})

// function playAnimationRubberband(rubberBandElement){
//     if (rubberBandElement.classList.contains("rubberBandAnimation") == false) {
//         rubberBandElement.classList.add
//     }
// }
const rubberBandLetters = document.querySelectorAll(".nameAnimation")

rubberBandLetters.forEach(letter => {
    $(letter).on({
        mouseenter() {
            $(this).addClass("rubberBandAnimation");
        },
        animationend() {
            $(this).removeClass("rubberBandAnimation");
        },
    });
});

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

// window.addEventListener("scroll", scrollEventHandler, false);

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