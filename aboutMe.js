var changingText = document.getElementById("aboutMeChangingText");
var changingHeader = document.getElementById("aboutMeChangingHeader");
var lcrSnaps = "aboutMeInfo1";
var nadurNadif = "aboutMeInfo2";
var theThirdEye = "aboutMeInfo3";

const lcrSnapsImg = document.getElementById(lcrSnaps);
const nadurNadifImg = document.getElementById(nadurNadif);
const theThirdEyeImg = document.getElementById(theThirdEye);

const lcrSnapsHeader = "LCR Snaps - Photography Journey"
const nadurNadifHeader = "Nadur Nadif - Environmental Voluntary Organization"
const TTEHeader = "Third Eye - Student Media NGO"

const lcrSnapsText = "I am a semi-professional photographer who has been taking photos since 2019. My journey started as a hobby when I “stole” by brother’s camera, and took it to a nature trip in Gozo. From that day I slowly feel in love with photography, and as soon as I got my first payslip in at that same summer I immediately when to the camera shop to buy a DSLR camera. <br> <br> From there I have been taking photos at every opportunity I get, slowly expanding my opportunities and slowly building up my equipment and skill set. Lately I have started to free lance professional photography for portrait photography, event photography and landscape photography. I offer custom prints for my work. <br> <br> Currently working on a photography portfolio website which should be launching sometime soon! In the meantime if you which to visit some of my work please check out either my <a href= 'https://www.instagram.com/lcr_snaps' class='pink link' target='_blank'>Instagram Page!</a>"
const nadurNadifText = "Nadur Nadif is a voluntary organization based in Gozo. The main aim of this organization is to increase awareness and teach the general public about sustainable development. This is achieved by organising multiple clean ups, forming multiple clean up groups in different localities by collaborating with local councils, opposing to unstainable development happing in Gozo and collaborating with the ministry of Gozo. <br><br> Since the revival of the voluntary organization in October 2020, over 1600+ bags of waste have been collected by Nadur Nadif! It's quite impressive to think that if each garbage bag collected (with an average diameter of around 0.5 - 0.7m) had to be placed one atop the other, it would approximately reach the same height as the tallest building in the world!!! <br><br> I was a proud member of the founders who revived the organization in 2020 but I have recently not been able to keep up with all the clean ups since I currently live in Malta, although I still try to help whenever I am in Gozo for the weekend. If you want to read more about the organization, check out their <a href='https://www.facebook.com/nadurnadif' class='pink link' target='_blank'>Facebook Page!</a> and show your love to this team of volunteers!"
const TTEText = "The Third Eye NGO is a media company that mostly covers media regarding students, university and other relevant topics to students. It is composed of voluntary student that write articles and do student-oriented events. <br> <br>I joined third eye as a events team member but I have also found myself helping the media team with my photography and editing skills. For further information on Third Eye you can find more information on our <a href= 'https://www.facebook.com/ThirdEyeMalta' class='pink link' target='_blank'>Facebook Page!</a>"

var changingTextCords = changingText.getBoundingClientRect();
var y = 0
//Handle Images CLicks and Text Changes
window.onclick = e => {
    console.log(e.target)
    if (e.target.id == lcrSnaps) {
        resetStyle();
        changingText.removeAttribute('data-aos', 'fade-right');
        changingText.classList.remove("aos-animate");
        changingText.classList.add("aos-animate");
        changingText.setAttribute('data-aos', 'fade-right');
        changingText.innerHTML = lcrSnapsText;
        changingHeader.innerText = lcrSnapsHeader;
        lcrSnapsImg.style = "border-style: dotted; border-color: #AA2EE6; border-width: thick;";
        y = changingText.getBoundingClientRect().bottom - window.scrollY;
        (y > 0) ? window.scrollBy(0, y) : window.scrollBy(0, 0);
    }
    if (e.target.id == nadurNadif) {
        resetStyle();
        changingText.removeAttribute('data-aos', 'fade-right');
        changingText.classList.remove("aos-animate");
        changingText.classList.add("aos-animate");
        changingText.setAttribute('data-aos', 'fade-right');
        changingText.innerHTML = nadurNadifText;
        changingHeader.innerText = nadurNadifHeader;
        nadurNadifImg.style = "border-style: dotted; border-color: #AA2EE6; border-width: thick;";
        y = changingText.getBoundingClientRect().bottom - window.scrollY;
        (y > 0) ? window.scrollBy(0, y) : window.scrollBy(0, 0);
    }
    if (e.target.id == theThirdEye) {
        resetStyle();
        changingText.removeAttribute('data-aos', 'fade-right');
        changingText.classList.remove("aos-animate");
        changingText.classList.add("aos-animate");
        changingText.setAttribute('data-aos', 'fade-right');
        changingHeader.innerText = TTEHeader;
        changingText.innerHTML = TTEText;
        theThirdEyeImg.style = "border-style: dotted; border-color: #AA2EE6; border-width: thick;";
        y = changingText.getBoundingClientRect().bottom - window.scrollY;
        (y > 0) ? window.scrollBy(0, y) : window.scrollBy(0, 0);
    }
}

function resetStyle() {
    lcrSnapsImg.style = "border: 0;"
    nadurNadifImg.style = "border: 0;"
    theThirdEyeImg.style = "border:0;"
}

//Handle Random Facts
const r1 = "I was born and raised in a family of farmers, yet I somehow found myself quite into technology and computing. Having said that I still enjoy helping out my parents in the fields when I can in the weekend.";
const r2 = "'Pokémon, gotta catch em all' – I am a die-hard Pokémon fan (well at least till the Nintendo 3DS series).  These are the lyrics to my child, with a wave of nostalgia of playing Pokémon TSG at school, with my brother and all my friends. Oh, sweet childhood!"
const r3 = "I am a freelance photographer, it started as a hobby and with enough practice I started doing it semi-professionally, now enjoying it as a side hustle."
const r4 = "I was very close to never going into coding, when choosing my subjects for high school, I had decided to choose Italian and English A-Levels so I would go as a translator. Thankfully one day before the applications for high school closed, I looked at the university prospectus to check for anything interesting and there I saw the course of AI, and changed my mind. I did my first if condition in my computing A level!!!"
const r5 = "Slowly becoming a bigger anime and manga fan by the day, current favourite manga: 'Blue Lock', current favourite anime:  'Erased'"
const r6 = "I travel quite a lot, it my way of relaxing and disconnecting completely from the fast lifestyle of today. My bucket list destinations are Japan and somewhere north enough to see the northern lights."
const r7 = "Like most developers out there, I am quite the coffee addict, my favourite coffee is home is caramel latte (preferably home brewed). I also have to say Starbucks is overrated and overpriced (sorry to everyone I just offended :p)"
const r8 = "I don’t like beans… that’s it, no beans please"
const r9 = "I was born in Gozo, but currently I am living in an apartment in Malta, due to university it is quite hard to stay traveling everyday between Malta and Gozo and therefore I chose to get a job and settle down in Malta."
const r10 = "I am extremely ambitious, at my core I believe that the sky’s the limit, with enough dedication the average person is capable of unbelievable things. "
const r11 = "Currently a certified first aider, but please, contain the excitement, no need to harm yourselves :D (For legal reasons this is a joke)."

const randomList = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11]
const randomFacts = document.getElementById("randomFacts")

function generateRandomFact() {
    randomNum = Math.floor((Math.random() * randomList.length));
    randomFacts.innerText = randomList[randomNum]
}
